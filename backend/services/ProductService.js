const sequelize = require("../config/database");
const { QueryTypes } = require("sequelize");

class ProductService {

  // ==========================================
  // GET ALL PRODUCTS
  // ==========================================
  async getAllProducts({
    page = 1,
    limit = 20,
    search = "",
    category = ""
  }) {

    page = Number(page);
    limit = Number(limit);

    const offset = (page - 1) * limit;

    let where = `
        p.post_type='product'
        AND p.post_status='publish'
    `;

    if (search) {
      where += `
      AND (
          p.post_title LIKE :search
          OR p.post_content LIKE :search
          OR p.post_excerpt LIKE :search
      )
      `;
    }

    if (category) {
      where += `
      AND EXISTS(
          SELECT 1
          FROM wpuz_term_relationships tr
          INNER JOIN wpuz_term_taxonomy tt
          ON tr.term_taxonomy_id=tt.term_taxonomy_id
          INNER JOIN wpuz_terms t
          ON t.term_id=tt.term_id
          WHERE
          tr.object_id=p.ID
          AND tt.taxonomy='product_cat'
          AND t.slug=:category
      )
      `;
    }

    const sql = `

SELECT

p.ID,

p.post_title,

p.post_name,

p.post_excerpt,

p.post_content,

MAX(
CASE WHEN pm.meta_key='_sku'
THEN pm.meta_value END
) sku,

MAX(
CASE WHEN pm.meta_key='_price'
THEN pm.meta_value END
) price,

MAX(
CASE WHEN pm.meta_key='_regular_price'
THEN pm.meta_value END
) regular_price,

MAX(
CASE WHEN pm.meta_key='_sale_price'
THEN pm.meta_value END
) sale_price,

MAX(
CASE WHEN pm.meta_key='_stock'
THEN pm.meta_value END
) stock,

MAX(
CASE WHEN pm.meta_key='_stock_status'
THEN pm.meta_value END
) stock_status,

MAX(
CASE WHEN pm.meta_key='_thumbnail_id'
THEN pm.meta_value END
) thumbnail_id,

MAX(
CASE WHEN pm.meta_key='_product_image_gallery'
THEN pm.meta_value END
) gallery_ids,

MAX(
CASE WHEN pm.meta_key='_featured'
THEN pm.meta_value END
) is_featured

FROM wpuz_posts p

LEFT JOIN wpuz_postmeta pm

ON pm.post_id=p.ID

WHERE

${where}

GROUP BY p.ID

ORDER BY p.ID DESC

LIMIT :limit OFFSET :offset

`;

    const products = await sequelize.query(sql, {
      replacements: {
        search: `%${search}%`,
        category,
        limit,
        offset
      },
      type: QueryTypes.SELECT
    });

    const ids = products.map(p => p.ID);

    const thumbnails = await this.getThumbnailMap(products);

    const galleries = await this.getGalleryMap(products);

    const categories = await this.getCategoryMap(ids);

    const tags = await this.getTagMap(ids);

    const finalProducts = products.map(product => ({

      id: product.ID,

      title: product.post_title,

      slug: product.post_name,

      excerpt: product.post_excerpt,

      description: product.post_content,

      sku: product.sku,

      price: Number(product.price || 0),

      regularPrice: Number(product.regular_price || 0),

      salePrice: Number(product.sale_price || 0),

      stock: Number(product.stock || 0),

      stockStatus: product.stock_status,

      thumbnail: thumbnails[product.thumbnail_id] || null,

      gallery: galleries[product.ID] || [],

      categories: categories[product.ID] || [],

      tags: tags[product.ID] || [],

      isFeatured: product.is_featured === 'yes'

    }));


    const totalSql = `

SELECT COUNT(*) total

FROM wpuz_posts p

WHERE

${where}

`;

    const total = await sequelize.query(totalSql, {

      replacements: {

        search: `%${search}%`,

        category

      },

      type: QueryTypes.SELECT

    });

    return {

      success: true,

      page,

      limit,

      total: total[0].total,

      totalPages: Math.ceil(total[0].total / limit),

      products: finalProducts

    };

  }



  // =======================================
  // PRODUCT DETAILS
  // =======================================

  async getProductBySlug(slug){

    const rows=await this.getAllProducts({
        page:1,
        limit:100,
        search:""
    });

    return rows.products.find(
        p=>p.slug===slug
    );

}

  // =======================================
  // FEATURED PRODUCTS
  // =======================================

  async getFeaturedProducts(){

    const products = await this.getAllProducts({
        page:1,
        limit:100,
        search:""
    });

    // Filter products that have featured meta key
    const featuredProductIds = await sequelize.query(`
      SELECT post_id
      FROM wpuz_postmeta
      WHERE meta_key = '_featured'
      AND meta_value = 'yes'
    `, { type: QueryTypes.SELECT });

    const featuredIds = featuredProductIds.map(p => p.post_id);

    const featuredProducts = products.products.filter(p => 
      featuredIds.includes(p.id)
    ).slice(0, 6);

    return {
      success: true,
      products: featuredProducts
    };

  }

  // =======================================
  // UPDATE PRODUCT FEATURED STATUS
  // =======================================

  async updateProductFeatured(productId, isFeatured) {
    try {
      // Check if meta already exists
      const existing = await sequelize.query(`
        SELECT meta_id
        FROM wpuz_postmeta
        WHERE post_id = :productId
        AND meta_key = '_featured'
      `, {
        replacements: { productId },
        type: QueryTypes.SELECT
      });

      if (existing.length > 0) {
        // Update existing
        await sequelize.query(`
          UPDATE wpuz_postmeta
          SET meta_value = :isFeatured
          WHERE post_id = :productId
          AND meta_key = '_featured'
        `, {
          replacements: { 
            productId, 
            isFeatured: isFeatured ? 'yes' : 'no' 
          },
          type: QueryTypes.UPDATE
        });
      } else {
        // Insert new
        await sequelize.query(`
          INSERT INTO wpuz_postmeta (post_id, meta_key, meta_value)
          VALUES (:productId, '_featured', :isFeatured)
        `, {
          replacements: { 
            productId, 
            isFeatured: isFeatured ? 'yes' : 'no' 
          },
          type: QueryTypes.INSERT
        });
      }

      return { success: true };
    } catch (error) {
      throw error;
    }
  } // =======================================
  // THUMBNAIL MAP
  // =======================================

  async getThumbnailMap(products) {

    const ids = products
      .map(p => p.thumbnail_id)
      .filter(id => id);

    if (!ids.length) return {};

    const rows = await sequelize.query(
      `
      SELECT
        ID,
        guid
      FROM wpuz_posts
      WHERE ID IN (:ids)
      `,
      {
        replacements: { ids },
        type: QueryTypes.SELECT
      }
    );

    const map = {};

    rows.forEach(row => {
      map[row.ID] = row.guid;
    });

    return map;
  }

  // =======================================
  // GALLERY MAP
  // =======================================

  async getGalleryMap(products) {

    const galleryMap = {};

    const imageIds = [];

    products.forEach(product => {

      if (!product.gallery_ids) return;

      const ids = product.gallery_ids
        .split(",")
        .map(id => Number(id.trim()))
        .filter(Boolean);

      galleryMap[product.ID] = ids;

      imageIds.push(...ids);

    });

    if (!imageIds.length) return {};

    const images = await sequelize.query(
      `
      SELECT
        ID,
        guid
      FROM wpuz_posts
      WHERE ID IN (:imageIds)
      `,
      {
        replacements: {
          imageIds: [...new Set(imageIds)]
        },
        type: QueryTypes.SELECT
      }
    );

    const imageMap = {};

    images.forEach(img => {
      imageMap[img.ID] = img.guid;
    });

    const result = {};

    Object.keys(galleryMap).forEach(productId => {

      result[productId] =
        galleryMap[productId]
          .map(id => imageMap[id])
          .filter(Boolean);

    });

    return result;

  }

  // =======================================
  // CATEGORY MAP
  // =======================================

  async getCategoryMap(productIds) {

    if (!productIds.length)
      return {};

    const rows = await sequelize.query(
      `
      SELECT

      tr.object_id,

      t.term_id,

      t.name,

      t.slug,

      tt.parent

      FROM wpuz_term_relationships tr

      INNER JOIN wpuz_term_taxonomy tt

      ON tt.term_taxonomy_id =
      tr.term_taxonomy_id

      INNER JOIN wpuz_terms t

      ON t.term_id = tt.term_id

      WHERE

      tr.object_id IN (:productIds)

      AND tt.taxonomy='product_cat'
      `,
      {
        replacements: {
          productIds
        },
        type: QueryTypes.SELECT
      }
    );

    const map = {};

    rows.forEach(row => {

      if (!map[row.object_id])
        map[row.object_id] = [];

      map[row.object_id].push({

        id: row.term_id,

        name: row.name,

        slug: row.slug,

        parent: row.parent

      });

    });

    return map;

  }

  // =======================================
  // TAG MAP
  // =======================================

  async getTagMap(productIds) {

    if (!productIds.length)
      return {};

    const rows = await sequelize.query(
      `
      SELECT

      tr.object_id,

      t.term_id,

      t.name,

      t.slug

      FROM wpuz_term_relationships tr

      INNER JOIN wpuz_term_taxonomy tt

      ON tt.term_taxonomy_id =
      tr.term_taxonomy_id

      INNER JOIN wpuz_terms t

      ON t.term_id =
      tt.term_id

      WHERE

      tr.object_id IN (:productIds)

      AND tt.taxonomy='product_tag'
      `,
      {
        replacements: {
          productIds
        },
        type: QueryTypes.SELECT
      }
    );

    const map = {};

    rows.forEach(row => {

      if (!map[row.object_id])
        map[row.object_id] = [];

      map[row.object_id].push({

        id: row.term_id,

        name: row.name,

        slug: row.slug

      });

    });

    return map;

  }

  // =======================================
  // SEARCH PRODUCTS
  // =======================================

  async searchProducts(keyword) {

    return await this.getAllProducts({

      page: 1,

      limit: 100,

      search: keyword

    });

  }

  // =======================================
  // RELATED PRODUCTS
  // =======================================

  async getRelatedProducts(productId) {

    const sql = `

    SELECT DISTINCT

      p.ID,

      p.post_title,

      p.post_name,

      MAX(
      CASE
      WHEN pm.meta_key='_price'
      THEN pm.meta_value
      END
      ) price,

      MAX(
      CASE
      WHEN pm.meta_key='_thumbnail_id'
      THEN pm.meta_value
      END
      ) thumbnail_id

    FROM wpuz_posts p

    LEFT JOIN wpuz_postmeta pm

    ON pm.post_id=p.ID

    INNER JOIN wpuz_term_relationships tr

    ON tr.object_id=p.ID

    INNER JOIN wpuz_term_taxonomy tt

    ON tt.term_taxonomy_id=
    tr.term_taxonomy_id

    WHERE

    p.post_type='product'

    AND

    p.post_status='publish'

    AND

    tt.taxonomy='product_cat'

    AND

    tt.term_id IN (

      SELECT tt.term_id

      FROM wpuz_term_relationships tr

      INNER JOIN wpuz_term_taxonomy tt

      ON tt.term_taxonomy_id=
      tr.term_taxonomy_id

      WHERE

      tr.object_id=:productId

      AND

      tt.taxonomy='product_cat'

    )

    AND p.ID<>:productId

    GROUP BY p.ID

    LIMIT 8

    `;

    const rows = await sequelize.query(sql, {

      replacements: {

        productId

      },

      type: QueryTypes.SELECT

    });

    const thumbs =
      await this.getThumbnailMap(rows);

    return rows.map(product => ({

      id: product.ID,

      title: product.post_title,

      slug: product.post_name,

      price: Number(product.price || 0),

      thumbnail:
        thumbs[product.thumbnail_id] || null

    }));

  }

}

module.exports = new ProductService();