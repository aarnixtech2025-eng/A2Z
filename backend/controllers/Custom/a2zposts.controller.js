const a2zPostService = require("../../services/Custom/a2zposts.service");

class A2ZPostController {
  // Create
  async createPost(req, res, next) {
    try {
      const post = await a2zPostService.createPost(req.body);

      return res.status(201).json({
        success: true,
        message: "Post created successfully.",
        data: post,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get All
 // Get All Posts with Pagination
async getAllPosts(req, res, next) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const result = await a2zPostService.getAllPosts(page, limit);

    return res.status(200).json({
      success: true,
      totalRecords: result.count,
      totalPages: Math.ceil(result.count / limit),
      currentPage: page,
      pageSize: limit,
      count: result.rows.length,
      data: result.rows,
    });
  } catch (error) {
    next(error);
  }
}
  // Get By ID
  async getPostById(req, res, next) {
    try {
      const post = await a2zPostService.getPostById(req.params.id);

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

  // Update
  async updatePost(req, res, next) {
    try {
      const post = await a2zPostService.updatePost(
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

  // Delete
  async deletePost(req, res, next) {
    try {
      const deleted = await a2zPostService.deletePost(req.params.id);

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

module.exports = new A2ZPostController();