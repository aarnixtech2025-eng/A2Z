const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const WpuzGlaMerchantIssues = sequelize.define(
  "WpuzGlaMerchantIssues",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    issue: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    code: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    severity: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    product: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    action: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    action_url: {
      type: DataTypes.STRING(1024),
      allowNull: true,
    },
    applicable_countries: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    source: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_gla_merchant_issues",
    timestamps: false,
  }
);

module.exports = WpuzGlaMerchantIssues;