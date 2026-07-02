const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const OrderProductLookup = sequelize.define(
  "OrderProductLookup",
  {
    order_item_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
    },
    order_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    variation_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    customer_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    date_created: {
      type: DataTypes.DATE,
    },
    product_qty: {
      type: DataTypes.INTEGER,
    },
    product_net_revenue: {
      type: DataTypes.DOUBLE,
    },
    product_gross_revenue: {
      type: DataTypes.DOUBLE,
    },
    coupon_amount: {
      type: DataTypes.DOUBLE,
    },
    tax_amount: {
      type: DataTypes.DOUBLE,
    },
    shipping_amount: {
      type: DataTypes.DOUBLE,
    },
    shipping_tax_amount: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    tableName: "wpuz_wc_order_product_lookup",
    timestamps: false,
  }
);

module.exports = OrderProductLookup;