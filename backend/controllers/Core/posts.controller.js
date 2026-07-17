const postService = require("../../services/Core/posts.service");

class PostController {
  /**
   * Create Post
   */
  async createPost(req, res, next) {
    try {
      const post = await postService.createPost(req.body);

      return res.status(201).json({
        success: true,
        message: "Post created successfully.",
        data: post,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get All Posts
   */
  async getAllPosts(req, res, next) {
    try {
      const posts = await postService.getAllPosts();

      return res.status(200).json({
        success: true,
        data: posts,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get Post By ID
   */
  async getPostById(req, res, next) {
    try {
      const post = await postService.getPostById(req.params.id);

      if (!post) {
        return res.status(404).json({
          success: false,
          message: "Post not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: post,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Update Post
   */
  async updatePost(req, res, next) {
    try {
      const post = await postService.updatePost(
        req.params.id,
        req.body
      );

      if (!post) {
        return res.status(404).json({
          success: false,
          message: "Post not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Post updated successfully.",
        data: post,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Delete Post
   */
  async deletePost(req, res, next) {
    try {
      const deleted = await postService.deletePost(req.params.id);

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Post not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Post deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PostController();