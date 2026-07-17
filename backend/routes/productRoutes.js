const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");
// Get All Products
router.get(
  "/",
  ProductController.getAllProducts
);
// Search Products
router.get(
  "/search",
  ProductController.searchProducts
);
// Featured Products
router.get(
  "/featured",
  ProductController.getFeaturedProducts
);
// Update Product Featured Status
router.put(
  "/:id/featured",
  ProductController.updateProductFeatured
);
// Products By Category
router.get(
  "/category/:slug",
  ProductController.getProductsByCategory
);
// Related Products
router.get(
  "/related/:id",
  ProductController.getRelatedProducts
);
// Product Details
router.get(
  "/:slug",
  ProductController.getProductBySlug
);
module.exports = router;