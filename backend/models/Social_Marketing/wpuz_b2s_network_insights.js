const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const B2SNetworkInsights = sequelize.define(
  "B2SNetworkInsights",
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
    b2s_posts_network_details_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    insight: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_b2s_network_insights",
    timestamps: false,
  }
);

module.exports = B2SNetworkInsights;