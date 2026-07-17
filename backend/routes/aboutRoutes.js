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
  createAbout,
  getAbouts,
  getAbout,
  updateAbout,
  deleteAbout
} = require(
  "../controllers/aboutController"
);

router.post(
  "/",
  protect,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 }
  ]),
  createAbout
);

router.get(
  "/",
  getAbouts
);

router.get(
  "/:id",
  getAbout
);

router.put(
  "/:id",
  protect,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 }
  ]),
  updateAbout
);

router.delete(
  "/:id",
  protect,
  deleteAbout
);

module.exports = router;
