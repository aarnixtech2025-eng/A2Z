const TaxonomyService = require("../services/TaxonomyService");
class TaxonomyController {
  /**
   * GET /api/taxonomies/:type
   */
  async getAll(req, res, next) {
    try {
      const { type } = req.params;
      const data = await TaxonomyService.getAll(type);
      return res.status(200).json({
        success: true,
        count: data.length,
        data,
      });
    } catch (error) {
      next(error);
    }
  }
  /**
   * GET /api/taxonomies/:type/tree
   */
  async getTree(req, res, next) {
    try {
      const { type } = req.params;
      const tree = await TaxonomyService.getTree(type);
      return res.status(200).json({
        success: true,
        count: tree.length,
        data: tree,
      });
    } catch (error) {
      next(error);
    }
  }
  /**
   * GET /api/taxonomies/:type/:slug
   */
  async getBySlug(req, res, next) {
    try {
      const { type, slug } = req.params;
      const taxonomy = await TaxonomyService.getBySlug(type, slug);
      if (!taxonomy) {
        return res.status(404).json({
          success: false,
          message: "Record not found",
        });
      }
      return res.status(200).json({
        success: true,
        data: taxonomy,
      });
    } catch (error) {
      next(error);
    }
  }
  /**
   * GET /api/taxonomies/:type/:slug/products
   */
  async getProducts(req, res, next) {
    try {
      const { type, slug } = req.params;
      const {
        page = 1,
        limit = 20,
      } = req.query;
      const products = await TaxonomyService.getProducts(
        type,
        slug,
        page,
        limit
      );
      return res.status(200).json({
        success: true,
        count: products.length,
        data: products,
      });
    } catch (error) {
      next(error);
    }
  }

  async getPageBySlug(req, res, next) {
    try {
      const page = await TaxonomyService.getPageBySlug(req.params.slug);

      if (!page) {
        return res.status(404).json({
          success: false,
          message: "Page not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: page,
      });
    } catch (error) {
      next(error);
    }
  }

  async getImportedList(req, res, next) {
    try {
      const postTypes = {
        "nok-oil-seals": "nok-oil-seal",
        "oil-seals": "oil-seal",
        oem: "oem",
        machines: "machtype",
        seals: "seal",
      };
      const postType = postTypes[req.params.listType];

      if (!postType) {
        return res.status(404).json({
          success: false,
          message: "List not found",
        });
      }

      const { page = 1, limit = 10 } = req.query;
      const data = await TaxonomyService.getImportedList(postType, page, limit);

      return res.status(200).json({
        success: true,
        ...data,
      });
    } catch (error) {
      next(error);
    }
  }

  async getWordPressMenu(req, res, next) {
    try {
      const menu = await TaxonomyService.getWordPressMenu();

      return res.status(200).json({
        success: true,
        data: menu,
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new TaxonomyController();