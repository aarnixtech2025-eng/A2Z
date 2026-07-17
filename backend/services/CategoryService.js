const sequelize = require("../config/database");
const { QueryTypes } = require("sequelize");

class CategoryService {

  // =====================================
  // GET ALL CATEGORIES
  // =====================================

  async getAllCategories() {

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

        tt.taxonomy='product_cat'

    ORDER BY

        tt.parent ASC,

        t.name ASC

    `;

    return await sequelize.query(sql, {
      type: QueryTypes.SELECT
    });

  }

  // =====================================
  // GET CATEGORY BY SLUG
  // =====================================

  async getCategoryBySlug(slug) {

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

    ON t.term_id=tt.term_id

    WHERE

        tt.taxonomy='product_cat'

        AND

        t.slug=:slug

    LIMIT 1

    `;

    const rows = await sequelize.query(sql, {

      replacements: { slug },

      type: QueryTypes.SELECT

    });

    return rows.length ? rows[0] : null;

  }

  // =====================================
  // CATEGORY TREE
  // =====================================

  async getCategoryTree() {

    const categories =
      await this.getAllCategories();

    const map = {};

    categories.forEach(category => {

      map[category.term_id] = {

        id: category.term_id,

        name: category.name,

        slug: category.slug,

        description: category.description,

        parent: category.parent,

        count: category.count,

        children: []

      };

    });

    const tree = [];

    categories.forEach(category => {

      if (
        category.parent &&
        map[category.parent]
      ) {

        map[category.parent]
          .children
          .push(map[category.term_id]);

      } else {

        tree.push(map[category.term_id]);

      }

    });

    return tree;

  }

}

module.exports = new CategoryService();