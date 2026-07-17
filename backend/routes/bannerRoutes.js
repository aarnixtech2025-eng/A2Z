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
  createBanner,
  getBanners,
  getBanner,
  updateBanner,
  deleteBanner
} = require(
  "../controllers/bannerController"
);

router.post(
  "/",
  protect,
  upload.array("banners", 5),
  createBanner
);

router.get(
  "/",
  getBanners
);

router.get(
  "/:id",
  getBanner
);

router.put(
  "/:id",
  protect,
  upload.array("banners", 5),
  updateBanner
);

router.delete(
  "/:id",
  protect,
  deleteBanner
);

module.exports = router;