const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const YoastExpiringStore = sequelize.define(
  "YoastExpiringStore",
  {
    key_name: {
      type: DataTypes.STRING(255),
      primaryKey: true,
      allowNull: false,
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    exp: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_yoast_expiring_store",
    timestamps: false,
  }
);

module.exports = YoastExpiringStore;