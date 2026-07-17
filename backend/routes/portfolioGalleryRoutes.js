const express = require("express");

const router = express.Router();

const upload = require(
  "../middleware/uploadMiddleware"
);

const {
  protect
} = require(
  "../middleware/authMiddleware"
);

const {
  createPortfolioGallery,
  getPortfolioGalleries,
  getPortfolioGallery,
  updatePortfolioGallery,
  deletePortfolioGallery
} = require(
  "../controllers/portfolioGalleryController"
);

// POST without upload middleware - image will be handled separately or can be null
router.post(
  "/",
  protect,
  createPortfolioGallery
);

// Alternative route for creating portfolioGallery with image
router.post(
  "/with-image",
  protect,
  upload.single("image"),
  createPortfolioGallery
);

router.get(
  "/",
  getPortfolioGalleries
);

router.get(
  "/:id",
  getPortfolioGallery
);

router.put(
  "/:id",
  protect,
  upload.single("image"),
  updatePortfolioGallery
);

router.delete(
  "/:id",
  protect,
  deletePortfolioGallery
);

module.exports = router;
