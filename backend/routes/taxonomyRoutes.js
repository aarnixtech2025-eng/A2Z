const express = require("express");

const router = express.Router();

const TaxonomyController = require("../controllers/TaxonomyController");

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