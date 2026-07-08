const express = require("express");
const router = express.Router();

const postsController = require("../../controllers/Core/posts.controller");

// Create Post
router.post("/", postsController.createPost);

// Get All Posts
router.get("/", postsController.getAllPosts);

// Get Post By ID
router.get("/:id", postsController.getPostById);

// Update Post
router.put("/:id", postsController.updatePost);

// Delete Post
router.delete("/:id", postsController.deletePost);

module.exports = router;