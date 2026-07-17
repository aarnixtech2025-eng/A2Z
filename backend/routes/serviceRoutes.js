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
  createService,
  getServices,
  getService,
  updateService,
  deleteService
} = require(
  "../controllers/serviceController"
);

// POST without upload middleware - image will be handled separately or can be null
router.post(
  "/",
  protect,
  createService
);

// Alternative route for creating service with image
router.post(
  "/with-image",
  protect,
  upload.single("image"),
  createService
);

router.get(
  "/",
  getServices
);

router.get(
  "/:id",
  getService
);

router.put(
  "/:id",
  protect,
  upload.single("image"),
  updateService
);

router.delete(
  "/:id",
  protect,
  deleteService
);

module.exports = router;