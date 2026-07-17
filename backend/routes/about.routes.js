const express = require("express");

const router = express.Router();

const {
  createAbout,
  getAllAbout,
  getAboutById,
  updateAbout,
  deleteAbout,
} = require("../controllers/about.controller");

const upload = require("../middleware/uploadMiddleware");

/* ==========================================================
   ABOUT ROUTES
========================================================== */

// Create About
router.post(
  "/",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),
  createAbout
);

// Get All
router.get("/", getAllAbout);

// Get By Id
router.get("/:id", getAboutById);

// Update
router.put(
  "/:id",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),
  updateAbout
);

// Delete
router.delete("/:id", deleteAbout);

module.exports = router;