const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Blog = sequelize.define("Blog", {
  title: DataTypes.STRING,

  slug: {
    type: DataTypes.STRING
  },

  shortDescription: DataTypes.TEXT,

  content: DataTypes.TEXT("long"),

  image: DataTypes.STRING,

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