const express = require("express");
const router = express.Router();

const {
  protect
} = require(
  "../middleware/authMiddleware"
);

const {
  createSeo,
  updateSeo,
  getSeoByPage,
  getAllSeo
} = require(
  "../controllers/seoController"
);

router.post(
  "/",
  protect,
  createSeo
);

router.put(
  "/:id",
  protect,
  updateSeo
);

router.get(
  "/",
  getAllSeo
);

router.get(
  "/:pageName",
  getSeoByPage
);

module.exports = router;