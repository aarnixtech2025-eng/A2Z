const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WooApiKey = sequelize.define(
  "WooApiKey",
  {
    key_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    description: {
      type: DataTypes.STRING(200),
    },
    permissions: {
      type: DataTypes.STRING(10),
    },
    consumer_key: {
      type: DataTypes.CHAR(64),
    },
    consumer_secret: {
      type: DataTypes.CHAR(43),
    },
    nonces: {
      type: DataTypes.TEXT("long"),
    },
    truncated_key: {
      type: DataTypes.CHAR(7),
    },
    last_access: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "wpuz_woocommerce_api_keys",
    timestamps: false,
  }
);

module.exports = WooApiKey;