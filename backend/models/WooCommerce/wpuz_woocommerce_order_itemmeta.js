const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WooOrderItemMeta = sequelize.define(
  "WooOrderItemMeta",
  {
    meta_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    order_item_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    meta_key: {
      type: DataTypes.STRING(255),
    },
    meta_value: {
      type: DataTypes.TEXT("long"),
    },
  },
  {
    tableName: "wpuz_woocommerce_order_itemmeta",
    timestamps: false,
  }
);

module.exports = WooOrderItemMeta;