const express = require("express");
const router = express.Router();

const commentController = require("../../controllers/Core/comments.controller");

// Create Comment
router.post("/", commentController.createComment);

// Get All Comments
router.get("/", commentController.getAllComments);

// Get Comment By ID
router.get("/:id", commentController.getCommentById);

// Update Comment
router.put("/:id", commentController.updateComment);

// Delete Comment
router.delete("/:id", commentController.deleteComment);

module.exports = router;