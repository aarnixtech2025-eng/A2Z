const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const WpuzGlaBudgetRecommendations = sequelize.define(
  "WpuzGlaBudgetRecommendations",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    currency: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    daily_budget: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_gla_budget_recommendations",
    timestamps: false,
  }
);

module.exports = WpuzGlaBudgetRecommendations;