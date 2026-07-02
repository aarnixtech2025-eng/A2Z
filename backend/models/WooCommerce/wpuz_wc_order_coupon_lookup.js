const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const OrderCouponLookup = sequelize.define(
  "OrderCouponLookup",
  {
    order_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
    },

    coupon_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },

    date_created: {
      type: DataTypes.DATE,
    },

    discount_amount: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    tableName: "wpuz_wc_order_coupon_lookup",
    timestamps: false,
  }
);

module.exports = OrderCouponLookup;