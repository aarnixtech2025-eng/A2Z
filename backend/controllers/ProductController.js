const ProductService = require("../services/ProductService");

class ProductController {

  // ==========================================
  // GET ALL PRODUCTS
  // ==========================================
  async getAllProducts(req, res, next) {

    try {

      const {
        page,
        limit,
        search,
        category
      } = req.query;

      const data =
        await ProductService.getAllProducts({
          page,
          limit,
          search,
          category
        });

      return res.status(200).json(data);

    } catch (error) {
      next(error);
    }

  }

  // ==========================================
  // GET PRODUCT DETAILS
  // ==========================================
  async getProductBySlug(req, res, next) {

    try {

      const product =
        await ProductService.getProductBySlug(
          req.params.slug
        );

      if (!product) {

        return res.status(404).json({
          success: false,
          message: "Product not found"
        });

      }

      return res.status(200).json({
        success: true,
        product
      });

    } catch (error) {
      next(error);
    }

  }

  // ==========================================
  // SEARCH PRODUCTS
  // ==========================================
  async searchProducts(req, res, next) {

    try {

      const keyword = req.query.q || "";

      const products =
        await ProductService.searchProducts(
          keyword
        );

      return res.status(200).json(products);

    } catch (error) {
      next(error);
    }

  }

  // ==========================================
  // PRODUCTS BY CATEGORY
  // ==========================================
  async getProductsByCategory(req, res, next) {

    try {

      const {
        page,
        limit
      } = req.query;

      const products =
        await ProductService.getAllProducts({

          page,

          limit,

          category: req.params.slug

        });

      return res.status(200).json(products);

    } catch (error) {
      next(error);
    }

  }

  // ==========================================
  // RELATED PRODUCTS
  // ==========================================
  async getRelatedProducts(req, res, next) {

    try {

      const products =
        await ProductService.getRelatedProducts(
          req.params.id
        );

      return res.status(200).json({

        success: true,

        products

      });

    } catch (error) {
      next(error);
    }

  }

  // ==========================================
  // FEATURED PRODUCTS
  // ==========================================
  async getFeaturedProducts(req, res, next) {

    try {

      const data =
        await ProductService.getFeaturedProducts();

      return res.status(200).json(data);

    } catch (error) {
      next(error);
    }

  }

}

module.exports = new ProductController();