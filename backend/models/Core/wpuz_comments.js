const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Comment = sequelize.define(
  "Comment",
  {
    comment_ID: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },

    comment_post_ID: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },

    comment_author: {
      type: DataTypes.TEXT,
    },

    comment_author_email: {
      type: DataTypes.STRING(100),
    },

    comment_author_url: {
      type: DataTypes.STRING(200),
    },

    comment_author_IP: {
      type: DataTypes.STRING(100),
    },

    comment_date: {
      type: DataTypes.DATE,
    },

    comment_date_gmt: {
      type: DataTypes.DATE,
    },

    comment_content: {
      type: DataTypes.TEXT,
    },

    comment_karma: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

    comment_approved: {
      type: DataTypes.STRING(20),
      defaultValue: "0",
    },

    comment_agent: {
      type: DataTypes.STRING(255),
    },

    comment_type: {
      type: DataTypes.STRING(20),
      defaultValue: "",
    },

    comment_parent: {
      type: DataTypes.BIGINT.UNSIGNED,
      defaultValue: 0,
    },

    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      defaultValue: 0,
    },
  },
  {
    tableName: "wpuz_comments",
    timestamps: false,
  }
);

module.exports = Comment;