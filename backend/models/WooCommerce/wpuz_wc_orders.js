const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      allowNull: false,
    },

    status: {
      type: DataTypes.STRING(20),
    },

    currency: {
      type: DataTypes.STRING(10),
    },

    type: {
      type: DataTypes.STRING(20),
    },

    tax_amount: {
      type: DataTypes.DECIMAL(26, 8),
    },

    total_amount: {
      type: DataTypes.DECIMAL(26, 8),
    },

    customer_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },

    billing_email: {
      type: DataTypes.STRING(320),
    },

    date_created_gmt: {
      type: DataTypes.DATE,
    },

    date_updated_gmt: {
      type: DataTypes.DATE,
    },

    parent_order_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },

    payment_method: {
      type: DataTypes.STRING(100),
    },

    payment_method_title: {
      type: DataTypes.TEXT,
    },

    transaction_id: {
      type: DataTypes.STRING(100),
    },

    ip_address: {
      type: DataTypes.STRING(100),
    },

    user_agent: {
      type: DataTypes.TEXT,
    },

    customer_note: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "wpuz_wc_orders",
    timestamps: false,
  }
);

module.exports = Order;