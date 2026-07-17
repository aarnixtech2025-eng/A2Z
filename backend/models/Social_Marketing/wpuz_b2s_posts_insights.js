const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const B2SPostsInsights = sequelize.define(
  "B2SPostsInsights",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    blog_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    b2s_posts_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    network_post_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    b2s_posts_network_details_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    insight: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_b2s_posts_insights",
    timestamps: false,
  }
);

module.exports = B2SPostsInsights;