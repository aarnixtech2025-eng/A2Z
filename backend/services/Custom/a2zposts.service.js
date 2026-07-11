const A2ZPost = require("../../models/Custom/A2ZPost");

class A2ZPostService {
  // Create
  async createPost(data) {
    return await A2ZPost.create(data);
  }

  // Get All
// Get All Posts with Pagination
async getAllPosts(page = 1, limit = 10) {
  const offset = (page - 1) * limit;

  return await A2ZPost.findAndCountAll({
    limit,
    offset,
    order: [["ID", "DESC"]],
  });
}

  // Get By ID
  async getPostById(id) {
    return await A2ZPost.findByPk(id);
  }

  // Update
  async updatePost(id, data) {
    const post = await A2ZPost.findByPk(id);

    if (!post) return null;

    await post.update(data);

    return post;
  }

  // Delete
  async deletePost(id) {
    const post = await A2ZPost.findByPk(id);

    if (!post) return false;

    await post.destroy();

    return true;
  }
}

module.exports = new A2ZPostService();