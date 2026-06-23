const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");


const Blog = sequelize.define(
  "Blog",
  {
      title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    shortDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    content: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },

    featuredImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    category: {
      type: DataTypes.ENUM(
        "Hydraulic Seal Kits",
        "Cylinder Repair Guides",
        "Maintenance Tips",
        "Seal Installation",
        "Industrial Applications",
        "Hydraulic Components",
        "Troubleshooting",
        "Product Updates",
        "Industry News",
        "Case Studies"
      ),
      allowNull: false,
    },

    tags: {
      type: DataTypes.STRING,
    },

    author: {
      type: DataTypes.STRING,
      defaultValue: "Admin",
    },

    relatedProduct: {
      type: DataTypes.STRING,
    },

    status: {
      type: DataTypes.ENUM("draft", "published"),
      defaultValue: "draft",
    },

    views: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

    publishDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },

    metaTitle: {
      type: DataTypes.STRING,
    },

    metaDescription: {
      type: DataTypes.TEXT,
    },

    createdBy: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Blog;