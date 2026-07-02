const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WooCommerceLog = sequelize.define(
  "WooCommerceLog",
  {
    log_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    level: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
    source: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    message: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    context: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_woocommerce_log",
    timestamps: false,
  }
);

module.exports = WooCommerceLog;