const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const A2ZPost = sequelize.define(
  "A2ZPost",
  {
    ID: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },

    post_author: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },

    post_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    post_date_gmt: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    post_content: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },

    post_title: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    post_excerpt: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    post_status: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    comment_status: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    ping_status: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    post_password: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    post_name: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },

    to_ping: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    pinged: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    post_modified: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    post_modified_gmt: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    post_content_filtered: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },

    post_parent: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },

    guid: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    menu_order: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    post_type: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    post_mime_type: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    comment_count: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
  },
  {
    tableName: "a2z_posts",
    timestamps: false,
  }
);

module.exports = A2ZPost;