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
  createBlog,
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog
} = require(
  "../controllers/blogController"
);

router.post(
  "/",
  protect,
  upload.single("image"),
  createBlog
);

router.get("/", getBlogs);

router.get("/:id", getBlog);

router.put(
  "/:id",
  protect,
  upload.single("image"),
  updateBlog
);

router.delete(
  "/:id",
  protect,
  deleteBlog
);

module.exports = router;