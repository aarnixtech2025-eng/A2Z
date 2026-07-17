const express = require("express");

const router = express.Router();

const CategoryController =
require("../controllers/CategoryController");

// Get Category Tree
router.get(
  "/tree",
  CategoryController.getCategoryTree
);

// Get All Categories
router.get(
  "/",
  CategoryController.getAllCategories
);

// Get Category By Slug
router.get(
  "/:slug",
  CategoryController.getCategoryBySlug
);

module.exports = router;