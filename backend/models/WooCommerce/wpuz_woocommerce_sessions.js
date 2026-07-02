const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WooSession = sequelize.define(
  "WooSession",
  {
    session_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    session_key: {
      type: DataTypes.CHAR(32),
    },
    session_value: {
      type: DataTypes.TEXT("long"),
    },
    session_expiry: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
  },
  {
    tableName: "wpuz_woocommerce_sessions",
    timestamps: false,
  }
);

module.exports = WooSession;
