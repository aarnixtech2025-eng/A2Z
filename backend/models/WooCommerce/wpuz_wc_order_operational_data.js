const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const OrderOperationalData = sequelize.define(
  "OrderOperationalData",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    created_via: {
      type: DataTypes.STRING(100),
    },
    woocommerce_version: {
      type: DataTypes.STRING(20),
    },
    prices_include_tax: {
      type: DataTypes.BOOLEAN,
    },
    coupon_usages_are_counted: {
      type: DataTypes.BOOLEAN,
    },
    download_permission_granted: {
      type: DataTypes.BOOLEAN,
    },
    cart_hash: {
      type: DataTypes.STRING(100),
    },
    new_order_email_sent: {
      type: DataTypes.BOOLEAN,
    },
    order_key: {
      type: DataTypes.STRING(100),
    },
    order_stock_reduced: {
      type: DataTypes.BOOLEAN,
    },
    date_paid_gmt: {
      type: DataTypes.DATE,
    },
    date_completed_gmt: {
      type: DataTypes.DATE,
    },
    shipping_tax_amount: {
      type: DataTypes.DECIMAL(26, 8),
    },
    shipping_total_amount: {
      type: DataTypes.DECIMAL(26, 8),
    },
    discount_tax_amount: {
      type: DataTypes.DECIMAL(26, 8),
    },
    discount_total_amount: {
      type: DataTypes.DECIMAL(26, 8),
    },
    recorded_sales: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: "wpuz_wc_order_operational_data",
    timestamps: false,
  }
);

module.exports = OrderOperationalData;