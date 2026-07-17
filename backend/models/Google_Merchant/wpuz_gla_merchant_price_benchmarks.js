const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const MerchantPriceBenchmark = sequelize.define(
  "wpuz_gla_merchant_price_benchmarks",
  {
    product_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },

    mc_product_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    mc_product_offer_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    mc_product_price_micros: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },

    mc_product_currency_code: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },

    mc_price_country_code: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },

    mc_price_benchmark_price_micros: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },

    mc_price_benchmark_price_currency_code: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },

    mc_insights_suggested_price_micros: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },

    mc_insights_suggested_price_currency_code: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },

    mc_insights_predicted_impressions_change_fraction: {
      type: DataTypes.DECIMAL(10, 6),
      allowNull: true,
    },

    mc_insights_predicted_clicks_change_fraction: {
      type: DataTypes.DECIMAL(10, 6),
      allowNull: true,
    },

    mc_insights_predicted_conversions_change_fraction: {
      type: DataTypes.DECIMAL(10, 6),
      allowNull: true,
    },

    mc_insights_effectiveness: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
    },

    mc_metrics_clicks: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },

    mc_metrics_impressions: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },

    mc_metrics_ctr: {
      type: DataTypes.DECIMAL(10, 6),
      allowNull: true,
    },

    mc_metrics_conversions: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    price_compared_with_benchmark: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
    },
  },
  {
    tableName: "wpuz_gla_merchant_price_benchmarks",
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    engine: "InnoDB",
    charset: "utf8mb4",
  }
);

module.exports = MerchantPriceBenchmark;