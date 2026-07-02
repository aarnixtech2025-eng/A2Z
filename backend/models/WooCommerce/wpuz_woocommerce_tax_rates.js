const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WooCommerceTaxRate = sequelize.define(
  "WooCommerceTaxRate",
  {
    tax_rate_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    tax_rate_country: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    tax_rate_state: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    tax_rate: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    tax_rate_name: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    tax_rate_priority: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    tax_rate_compound: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tax_rate_shipping: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tax_rate_order: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    tax_rate_class: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_woocommerce_tax_rates",
    timestamps: false,
  }
);

module.exports = WooCommerceTaxRate;