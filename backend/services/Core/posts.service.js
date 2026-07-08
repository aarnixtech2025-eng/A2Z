const {
  Post,
  User,
  PostMeta,
} = require("../../models/Core");

class PostService {
  /**
   * Create Post
   */
  async createPost(data) {
    const post = await Post.create(data);
    return post;
  }

  /**
   * Get All Posts
   */
  async getAllPosts() {
    return await Post.findAll({
      order: [["ID", "DESC"]],
    });
  }

  /**
   * Get Post By ID
   */
  async getPostById(id) {
    return await Post.findByPk(id);
  }

  /**
   * Update Post
   */
  async updatePost(id, data) {
    const post = await Post.findByPk(id);

    if (!post) {
      return null;
    }

    await post.update(data);

    return post;
  }

  /**
   * Delete Post
   */
  async deletePost(id) {
    const post = await Post.findByPk(id);

    if (!post) {
      return null;
    }

    await post.destroy();

    return true;
  }
}

module.exports = new PostService();