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
}
module.exports = new TaxonomyController();