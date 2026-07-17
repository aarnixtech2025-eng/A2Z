const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const OrderMeta = sequelize.define(
  "OrderMeta",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },

    order_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },

    meta_key: {
      type: DataTypes.STRING(255),
    },

    meta_value: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "wpuz_wc_orders_meta",
    timestamps: false,
  }
);

module.exports = OrderMeta;