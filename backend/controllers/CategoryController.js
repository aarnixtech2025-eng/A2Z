const CategoryService = require("../services/CategoryService");

class CategoryController {

  // =====================================
  // GET ALL CATEGORIES
  // =====================================
  async getAllCategories(req, res, next) {

    try {

      const categories =
        await CategoryService.getAllCategories();

      return res.status(200).json({
        success: true,
        count: categories.length,
        categories
      });

    } catch (error) {
      next(error);
    }

  }

  // =====================================
  // GET CATEGORY BY SLUG
  // =====================================
  async getCategoryBySlug(req, res, next) {

    try {

      const category =
        await CategoryService.getCategoryBySlug(
          req.params.slug
        );

      if (!category) {
        return res.status(404).json({
          success: false,
          message: "Category not found"
        });
      }

      return res.status(200).json({
        success: true,
        category
      });

    } catch (error) {
      next(error);
    }

  }

  // =====================================
  // GET CATEGORY TREE
  // =====================================
  async getCategoryTree(req, res, next) {

    try {

      const tree =
        await CategoryService.getCategoryTree();

      return res.status(200).json({
        success: true,
        categories: tree
      });

    } catch (error) {
      next(error);
    }

  }

}

module.exports = new CategoryController();