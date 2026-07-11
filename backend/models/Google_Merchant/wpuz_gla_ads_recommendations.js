const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const WpuzGlaAdsRecommendations = sequelize.define(
  "WpuzGlaAdsRecommendations",
  {
    recommendation_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
    },
    recommendation_type: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    recommendation_resource_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    recommendation_campaign_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    recommendation_campaign_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    recommendation_campaign_status: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    recommendation_customer_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    recommendation_last_synced: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_gla_ads_recommendations",
    timestamps: false,
  }
);

module.exports = WpuzGlaAdsRecommendations;