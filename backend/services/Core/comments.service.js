const { Comment, Post, User, CommentMeta } = require("../../models/Core");

class CommentService {
  async createComment(data) {
    return await Comment.create(data);
  }

  async getAllComments() {
    return await Comment.findAll({
      include: [
        {
          model: Post,
          as: "post",
        },
        {
          model: User,
          as: "user",
        },
        {
          model: CommentMeta,
          as: "meta",
        },
      ],
    });
  }

  async getCommentById(id) {
    return await Comment.findByPk(id, {
      include: [
        {
          model: Post,
          as: "post",
        },
        {
          model: User,
          as: "user",
        },
        {
          model: CommentMeta,
          as: "meta",
        },
      ],
    });
  }

  async updateComment(id, data) {
    const comment = await Comment.findByPk(id);

    if (!comment) return null;

    await comment.update(data);

    return comment;
  }

  async deleteComment(id) {
    const comment = await Comment.findByPk(id);

    if (!comment) return false;

    await comment.destroy();

    return true;
  }
}

module.exports = new CommentService();