const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WooPaymentTokenMeta = sequelize.define(
  "WooPaymentTokenMeta",
  {
    meta_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    payment_token_id: {
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
    tableName: "wpuz_woocommerce_payment_tokenmeta",
    timestamps: false,
  }
);

module.exports = WooPaymentTokenMeta;   