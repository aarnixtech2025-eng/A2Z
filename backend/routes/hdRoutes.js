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
  createHD,
  getHDs,
  getHD,
  updateHD,
  deleteHD
} = require(
  "../controllers/hdController"
);

// POST without upload middleware - image will be handled separately or can be null
router.post(
  "/",
  protect,
  createHD
);

// Alternative route for creating hd with image
router.post(
  "/with-image",
  protect,
  upload.single("image"),
  createHD
);

router.get(
  "/",
  getHDs
);

router.get(
  "/:id",
  getHD
);

router.put(
  "/:id",
  protect,
  upload.single("image"),
  updateHD
);

router.delete(
  "/:id",
  protect,
  deleteHD
);

module.exports = router;
