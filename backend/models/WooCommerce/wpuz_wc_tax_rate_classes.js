const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const TaxRateClass = sequelize.define(
  "TaxRateClass",
  {
    tax_rate_class_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(200),
    },
    slug: {
      type: DataTypes.STRING(200),
    },
  },
  {
    tableName: "wpuz_wc_tax_rate_classes",
    timestamps: false,
  }
);

module.exports = TaxRateClass;