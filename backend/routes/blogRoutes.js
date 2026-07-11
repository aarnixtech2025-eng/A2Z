const express = require("express");

const router = express.Router();

const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

router.post("/",upload.single("featuredImage"),createBlog);

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.put("/:id", upload.single("featuredImage"), updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;