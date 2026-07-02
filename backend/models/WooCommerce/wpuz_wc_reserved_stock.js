const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const ReservedStock = sequelize.define(
  "ReservedStock",
  {
    order_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    stock_quantity: {
      type: DataTypes.DOUBLE,
    },
    timestamp: {
      type: DataTypes.DATE,
    },
    expires: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "wpuz_wc_reserved_stock",
    timestamps: false,
  }
);

module.exports = ReservedStock;