const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const OrderStats = sequelize.define(
  "OrderStats",
  {
    order_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
    },
    parent_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    date_created: {
      type: DataTypes.DATE,
    },
    date_created_gmt: {
      type: DataTypes.DATE,
    },
    num_items_sold: {
      type: DataTypes.INTEGER,
    },
    total_sales: {
      type: DataTypes.DOUBLE,
    },
    tax_total: {
      type: DataTypes.DOUBLE,
    },
    shipping_total: {
      type: DataTypes.DOUBLE,
    },
    net_total: {
      type: DataTypes.DOUBLE,
    },
    returning_customer: {
      type: DataTypes.BOOLEAN,
    },
    status: {
      type: DataTypes.STRING(20),
    },
    customer_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    date_paid: {
      type: DataTypes.DATE,
    },
    date_completed: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "wpuz_wc_order_stats",
    timestamps: false,
  }
);

module.exports = OrderStats;