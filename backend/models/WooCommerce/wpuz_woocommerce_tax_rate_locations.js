const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WooCommerceTaxRateLocation = sequelize.define(
  "WooCommerceTaxRateLocation",
  {
    location_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    location_code: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    tax_rate_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    location_type: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_woocommerce_tax_rate_locations",
    timestamps: false,
  }
);

module.exports = WooCommerceTaxRateLocation;