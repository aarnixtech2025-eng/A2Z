const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WooPaymentToken = sequelize.define(
  "WooPaymentToken",
  {
    token_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    gateway_id: {
      type: DataTypes.STRING(200),
    },
    token: {
      type: DataTypes.TEXT,
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    type: {
      type: DataTypes.STRING(200),
    },
    is_default: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: "wpuz_woocommerce_payment_tokens",
    timestamps: false,
  }
);

module.exports = WooPaymentToken;