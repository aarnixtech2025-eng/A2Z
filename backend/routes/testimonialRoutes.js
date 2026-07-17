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
  createTestimonial,
  getTestimonials,
  updateTestimonial,
  deleteTestimonial
} = require(
  "../controllers/testimonialController"
);

router.post(
  "/",
  protect,
  upload.single("image"),
  createTestimonial
);

router.get(
  "/",
  getTestimonials
);

router.put(
  "/:id",
  protect,
  upload.single("image"),
  updateTestimonial
);

router.delete(
  "/:id",
  protect,
  deleteTestimonial
);

module.exports = router;