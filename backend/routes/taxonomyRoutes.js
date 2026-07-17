const express = require("express");

const router = express.Router();

const TaxonomyController = require("../controllers/TaxonomyController");

router.get(
  "/wordpress-menu",
  TaxonomyController.getWordPressMenu
);

router.get(
  "/pages/:slug",
  TaxonomyController.getPageBySlug
);

router.get(
  "/lists/:listType",
  TaxonomyController.getImportedList
);

// Get taxonomy tree
router.get(
  "/:type/tree",
  TaxonomyController.getTree
);

// Products by taxonomy
router.get(
  "/:type/:slug/products",
  TaxonomyController.getProducts
);

// Get taxonomy by slug
router.get(
  "/:type/:slug",
  TaxonomyController.getBySlug
);

// Get all taxonomy
router.get(
  "/:type",
  TaxonomyController.getAll
);

module.exports = router;