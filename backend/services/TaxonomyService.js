const sequelize = require("../config/database");
const { QueryTypes } = require("sequelize");

const TAXONOMIES = {
  categories: "product_cat",
  brands: "product_brand",
  series: "series",
  tags: "product_tag",
};

class TaxonomyService {
  /**
   * Validate taxonomy key
   */
  getTaxonomy(type) {
    const taxonomy = TAXONOMIES[type];

    if (!taxonomy) {
      throw new Error(`Invalid taxonomy type : ${type}`);
    }

    return taxonomy;
  }

  /**
   * ----------------------------------------
   * GET ALL TAXONOMIES
   * ----------------------------------------
   */
  async getAll(type) {
    const taxonomy = this.getTaxonomy(type);

    const sql = `
        SELECT
            t.term_id,
            t.name,
            t.slug,
            tt.description,
            tt.parent,
            tt.count
        FROM wpuz_terms t
        INNER JOIN wpuz_term_taxonomy tt
            ON t.term_id = tt.term_id
        WHERE tt.taxonomy = :taxonomy
        ORDER BY
            tt.parent ASC,
            t.name ASC
    `;

    return await sequelize.query(sql, {
      replacements: {
        taxonomy,
      },
      type: QueryTypes.SELECT,
    });
  }

  /**
   * ----------------------------------------
   * GET TREE
   * ----------------------------------------
   */

  async getTree(type) {
    const rows = await this.getAll(type);

    const map = {};

    rows.forEach((row) => {
      map[row.term_id] = {
        id: row.term_id,
        name: row.name,
        slug: row.slug,
        description: row.description,
        parent: row.parent,
        count: row.count,
        children: [],
      };
    });

    const tree = [];

    rows.forEach((row) => {
      if (row.parent && map[row.parent]) {
        map[row.parent].children.push(map[row.term_id]);
      } else {
        tree.push(map[row.term_id]);
      }
    });

    return tree;
  }

  /**
   * ----------------------------------------
   * GET SINGLE TAXONOMY
   * ----------------------------------------
   */

  async getBySlug(type, slug) {
    const taxonomy = this.getTaxonomy(type);

    const sql = `
        SELECT
            t.term_id,
            t.name,
            t.slug,
            tt.description,
            tt.parent,
            tt.count
        FROM wpuz_terms t
        INNER JOIN wpuz_term_taxonomy tt
            ON t.term_id = tt.term_id
        WHERE
            tt.taxonomy=:taxonomy
        AND
            t.slug=:slug
        LIMIT 1
    `;

    const rows = await sequelize.query(sql, {
      replacements: {
        taxonomy,
        slug,
      },
      type: QueryTypes.SELECT,
    });

    return rows.length ? rows[0] : null;
  }

  /**
   * ----------------------------------------
   * PRODUCTS OF TAXONOMY
   * ----------------------------------------
   */

  async getProducts(type, slug, page = 1, limit = 20) {
    const taxonomy = this.getTaxonomy(type);

    page = Number(page);
    limit = Number(limit);

    const offset = (page - 1) * limit;

    const sql = `
SELECT

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

ON tt.term_taxonomy_id=tr.term_taxonomy_id

INNER JOIN wpuz_terms t

ON t.term_id=tt.term_id

WHERE

p.post_type='product'

AND

p.post_status='publish'

AND

tt.taxonomy=:taxonomy

AND

t.slug=:slug

GROUP BY p.ID

ORDER BY p.post_title

LIMIT :limit

OFFSET :offset
`;

    const products = await sequelize.query(sql, {
      replacements: {
        taxonomy,
        slug,
        limit,
        offset,
      },
      type: QueryTypes.SELECT,
    });

    if (!products.length) {
      return [];
    }

    const imageIds = products
      .map((p) => p.thumbnail_id)
      .filter(Boolean);

    let imageMap = {};

    if (imageIds.length) {
      const images = await sequelize.query(
        `
SELECT ID,guid

FROM wpuz_posts

WHERE ID IN(:imageIds)
`,
        {
          replacements: {
            imageIds,
          },
          type: QueryTypes.SELECT,
        }
      );

      images.forEach((img) => {
        imageMap[img.ID] = img.guid;
      });
    }

    return products.map((product) => ({
      id: product.ID,
      title: product.post_title,
      slug: product.post_name,
      price: Number(product.price || 0),
      thumbnail: imageMap[product.thumbnail_id] || null,
    }));
  }

  /**
   * ----------------------------------------
   * PRODUCT CATEGORIES
   * ----------------------------------------
   */

  async getProductCategories(productId) {
    const sql = `
SELECT

t.term_id,

t.name,

t.slug,

tt.parent

FROM wpuz_term_relationships tr

INNER JOIN wpuz_term_taxonomy tt

ON tr.term_taxonomy_id=tt.term_taxonomy_id

INNER JOIN wpuz_terms t

ON t.term_id=tt.term_id

WHERE

tr.object_id=:productId

AND

tt.taxonomy='product_cat'
`;

    return await sequelize.query(sql, {
      replacements: {
        productId,
      },
      type: QueryTypes.SELECT,
    });
  }

  /**
   * ----------------------------------------
   * PRODUCT TAGS
   * ----------------------------------------
   */

  async getProductTags(productId) {
    const sql = `
SELECT

t.term_id,

t.name,

t.slug

FROM wpuz_term_relationships tr

INNER JOIN wpuz_term_taxonomy tt

ON tr.term_taxonomy_id=tt.term_taxonomy_id

INNER JOIN wpuz_terms t

ON t.term_id=tt.term_id

WHERE

tr.object_id=:productId

AND

tt.taxonomy='product_tag'
`;

    return await sequelize.query(sql, {
      replacements: {
        productId,
      },
      type: QueryTypes.SELECT,
    });
  }

  async getPageBySlug(slug) {
    const rows = await sequelize.query(
      `
        SELECT
          ID AS id,
          post_title AS title,
          post_name AS slug,
          post_content AS content,
          post_excerpt AS excerpt,
          post_date AS publishedAt
        FROM a2z_posts
        WHERE post_type = 'page'
          AND post_status = 'publish'
          AND post_name = :slug
        LIMIT 1
      `,
      {
        replacements: { slug },
        type: QueryTypes.SELECT,
      }
    );

    return rows[0] || null;
  }

  async getImportedList(postType, page = 1, limit = 10) {
    const currentPage = Math.max(Number(page) || 1, 1);
    const pageSize = Math.max(Number(limit) || 10, 1);
    const offset = (currentPage - 1) * pageSize;
    const replacements = {
      postType,
      status: "publish",
      limit: pageSize,
      offset,
    };

    const [posts, totals] = await Promise.all([
      sequelize.query(
        `
          SELECT
            ID AS id,
            post_title AS title,
            post_name AS slug,
            post_content AS content,
            post_excerpt AS excerpt,
            post_date AS publishedAt
          FROM a2z_posts
          WHERE post_type = :postType
            AND post_status = :status
          ORDER BY ID ASC
          LIMIT :limit OFFSET :offset
        `,
        { replacements, type: QueryTypes.SELECT }
      ),
      sequelize.query(
        `
          SELECT COUNT(*) AS total
          FROM a2z_posts
          WHERE post_type = :postType
            AND post_status = :status
        `,
        { replacements, type: QueryTypes.SELECT }
      ),
    ]);

    const total = Number(totals[0]?.total || 0);

    return {
      posts,
      total,
      page: currentPage,
      totalPages: Math.ceil(total / pageSize),
    };
  }

  async getWordPressMenu() {
    const [menuItems, menuMeta] = await Promise.all([
      sequelize.query(
        `
          SELECT
            ID AS id,
            post_title AS title,
            post_name AS name,
            menu_order
          FROM wpuz_posts
          WHERE post_type = 'nav_menu_item'
          ORDER BY menu_order ASC
        `,
        { type: QueryTypes.SELECT }
      ),
      sequelize.query(
        `
          SELECT
            post_id,
            meta_key,
            meta_value
          FROM wpuz_postmeta
          WHERE post_id IN (
            SELECT ID FROM wpuz_posts WHERE post_type = 'nav_menu_item'
          )
          AND meta_key IN (
            '_menu_item_type',
            '_menu_item_object_id',
            '_menu_item_menu_item_parent',
            '_menu_item_url'
          )
        `,
        { type: QueryTypes.SELECT }
      ),
    ]);

    const metaMap = {};
    menuMeta.forEach((meta) => {
      if (!metaMap[meta.post_id]) {
        metaMap[meta.post_id] = {};
      }
      metaMap[meta.post_id][meta.meta_key] = meta.meta_value;
    });

    const items = menuItems.map((item) => ({
      id: item.id,
      title: item.title,
      name: item.name,
      menu_order: item.menu_order,
      type: metaMap[item.id]?._menu_item_type || null,
      object_id: metaMap[item.id]?._menu_item_object_id || null,
      parent: Number(metaMap[item.id]?._menu_item_menu_item_parent || 0),
      url: metaMap[item.id]?._menu_item_url || null,
    }));

    const objectIds = items
      .filter((item) => item.type === 'post_type' && item.object_id)
      .map((item) => item.object_id);

    let postMap = {};
    if (objectIds.length > 0) {
      const posts = await sequelize.query(
        `
          SELECT
            ID AS id,
            post_title AS title,
            post_name AS slug,
            post_type AS type
          FROM a2z_posts
          WHERE ID IN (:objectIds)
        `,
        {
          replacements: { objectIds },
          type: QueryTypes.SELECT,
        }
      );
      posts.forEach((post) => {
        postMap[post.id] = post;
      });
    }

    const enrichedItems = items.map((item) => {
      if (item.type === 'post_type' && item.object_id && postMap[item.object_id]) {
        return {
          ...item,
          post: postMap[item.object_id],
        };
      }
      return item;
    });

    const map = {};
    enrichedItems.forEach((item) => {
      map[item.id] = {
        ...item,
        children: [],
      };
    });

    const tree = [];
    enrichedItems.forEach((item) => {
      if (item.parent && map[item.parent]) {
        map[item.parent].children.push(map[item.id]);
      } else {
        tree.push(map[item.id]);
      }
    });

    return tree;
  }
}

module.exports = new TaxonomyService();