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
  createPhoto,
  getPhotos,
  getPhoto,
  updatePhoto,
  deletePhoto
} = require(
  "../controllers/photoController"
);

// POST without upload middleware - image will be handled separately or can be null
router.post(
  "/",
  protect,
  createPhoto
);

// Alternative route for creating photo with image
router.post(
  "/with-image",
  protect,
  upload.single("image"),
  createPhoto
);

router.get(
  "/",
  getPhotos
);

router.get(
  "/:id",
  getPhoto
);

router.put(
  "/:id",
  protect,
  upload.single("image"),
  updatePhoto
);

router.delete(
  "/:id",
  protect,
  deletePhoto
);

module.exports = router;
