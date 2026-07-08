const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Post = sequelize.define(
  "Post",
  {
    ID: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    post_author: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    post_date: {
      type: DataTypes.DATE,
    },
    post_date_gmt: {
      type: DataTypes.DATE,
    },
    post_content: {
      type: DataTypes.TEXT("long"),
    },
    post_title: {
      type: DataTypes.TEXT,
    },
    post_excerpt: {
      type: DataTypes.TEXT,
    },
    post_status: {
      type: DataTypes.STRING(20),
    },
    comment_status: {
      type: DataTypes.STRING(20),
    },
    ping_status: {
      type: DataTypes.STRING(20),
    },
    post_password: {
      type: DataTypes.STRING(255),
    },
    post_name: {
      type: DataTypes.STRING(200),
    },
    to_ping: {
      type: DataTypes.TEXT,
    },
    pinged: {
      type: DataTypes.TEXT,
    },
    post_modified: {
      type: DataTypes.DATE,
    },
    post_modified_gmt: {
      type: DataTypes.DATE,
    },
    post_content_filtered: {
      type: DataTypes.TEXT("long"),
    },
    post_parent: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    guid: {
      type: DataTypes.STRING(255),
    },
    menu_order: {
      type: DataTypes.INTEGER,
    },
    post_type: {
      type: DataTypes.STRING(20),
    },
    post_mime_type: {
      type: DataTypes.STRING(100),
    },
    comment_count: {
      type: DataTypes.BIGINT,
    },
  },
  {
    tableName: "wpuz_posts",
    timestamps: false,
  }
);

module.exports = Post;