const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Blog = sequelize.define("Blog", {
  title: DataTypes.STRING,

  slug: {
    type: DataTypes.STRING
  },

  shortDescription: DataTypes.TEXT,

  description: DataTypes.TEXT("long"),

  featuredImage: DataTypes.STRING,

  author: {
    type: DataTypes.STRING,
    defaultValue: "Admin"
  },

  status: {
    type: DataTypes.ENUM("draft", "published"),
    defaultValue: "draft"
  },

  createdBy: DataTypes.INTEGER
}, {
  timestamps: true,
  tableName: "Blogs"
});

module.exports = Blog;