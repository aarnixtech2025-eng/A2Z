const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WooOrderItem = sequelize.define(
  "WooOrderItem",
  {
    order_item_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    order_item_name: {
      type: DataTypes.TEXT,
    },
    order_item_type: {
      type: DataTypes.STRING(200),
    },
    order_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
  },
  {
    tableName: "wpuz_woocommerce_order_items",
    timestamps: false,
  }
);

module.exports = WooOrderItem;