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
  createWhyChooseUs,
  getWhyChooseUsList,
  getWhyChooseUs,
  updateWhyChooseUs,
  deleteWhyChooseUs
} = require(
  "../controllers/whyChooseUsController"
);

router.post(
  "/",
  protect,
  upload.single("image"),
  createWhyChooseUs
);

router.get(
  "/",
  getWhyChooseUsList
);

router.get(
  "/:id",
  getWhyChooseUs
);

router.put(
  "/:id",
  protect,
  upload.single("image"),
  updateWhyChooseUs
);

router.delete(
  "/:id",
  protect,
  deleteWhyChooseUs
);

module.exports = router;
