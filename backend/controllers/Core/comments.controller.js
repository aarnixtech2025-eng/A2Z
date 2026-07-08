const commentService = require("../../services/Core/comments.service");

class CommentController {
  /**
   * Create Comment
   */
  async createComment(req, res, next) {
    try {
      const comment = await commentService.createComment(req.body);

      return res.status(201).json({
        success: true,
        message: "Comment created successfully.",
        data: comment,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get All Comments
   */
  async getAllComments(req, res, next) {
    try {
      const comments = await commentService.getAllComments();

      return res.status(200).json({
        success: true,
        data: comments,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get Comment By ID
   */
  async getCommentById(req, res, next) {
    try {
      const comment = await commentService.getCommentById(req.params.id);

      if (!comment) {
        return res.status(404).json({
          success: false,
          message: "Comment not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: comment,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Update Comment
   */
  async updateComment(req, res, next) {
    try {
      const comment = await commentService.updateComment(
        req.params.id,
        req.body
      );

      if (!comment) {
        return res.status(404).json({
          success: false,
          message: "Comment not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Comment updated successfully.",
        data: comment,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Delete Comment
   */
  async deleteComment(req, res, next) {
    try {
      const deleted = await commentService.deleteComment(req.params.id);

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Comment not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Comment deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CommentController();