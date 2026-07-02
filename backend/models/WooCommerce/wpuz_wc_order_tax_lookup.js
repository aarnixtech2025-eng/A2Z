const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const OrderTaxLookup = sequelize.define(
  "OrderTaxLookup",
  {
    order_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
    },
    tax_rate_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
    },
    date_created: {
      type: DataTypes.DATE,
    },
    shipping_tax: {
      type: DataTypes.DOUBLE,
    },
    order_tax: {
      type: DataTypes.DOUBLE,
    },
    total_tax: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    tableName: "wpuz_wc_order_tax_lookup",
    timestamps: false,
  }
);

module.exports = OrderTaxLookup;