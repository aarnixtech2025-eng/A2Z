const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const wpuz_gla_merchant_price_benchmarks = sequelize.define(
  "wpuz_gla_merchant_price_benchmarks",
  {
    product_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    mc_product_id: {
      type: DataTypes.STRING(255),
    },
    mc_product_offer_id: {
      type: DataTypes.STRING(255),
    },
    mc_product_price_micros: {
      type: DataTypes.STRING(64),
    },
    mc_product_currency_code: {
      type: DataTypes.STRING(3),
    },
    mc_price_country_code: {
      type: DataTypes.STRING(2),
    },
    mc_price_benchmark_price_micros: {
      type: DataTypes.STRING(64),
    },
    mc_price_benchmark_price_currency_code: {
      type: DataTypes.STRING(3),
    },
    mc_insights_suggested_price_micros: {
      type: DataTypes.STRING(64),
    },
    mc_insights_suggested_price_currency_code: {
      type: DataTypes.STRING(3),
    },
    mc_insights_predicted_impressions_change_fraction: {
      type: DataTypes.DECIMAL(10, 6),
    },
    mc_insights_predicted_clicks_change_fraction: {
      type: DataTypes.DECIMAL(10, 6),
    },
    mc_insights_predicted_conversions_change_fraction: {
      type: DataTypes.DECIMAL(10, 6),
    },
    mc_insights_effectiveness: {
      type: DataTypes.BOOLEAN,
    },
    mc_metrics_clicks: {
      type: DataTypes.STRING(64),
    },
    mc_metrics_impressions: {
      type: DataTypes.STRING(64),
    },
    mc_metrics_ctr: {
      type: DataTypes.INTEGER,
    },
    mc_metrics_conversions: {
      type: DataTypes.INTEGER,
    },
    price_compared_with_benchmark: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: "wpuz_gla_merchant_price_benchmarks",
    timestamps: false,
  }
);

module.exports = wpuz_gla_merchant_price_benchmarks;