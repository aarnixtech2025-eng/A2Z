const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WfReverseCache = sequelize.define(
  "WfReverseCache",
  {
    IP: {
      type: DataTypes.BLOB("tiny"),
      primaryKey: true,
    },
    host: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    lastUpdate: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_wfreversecache",
    timestamps: false,
  }
);

module.exports = WfReverseCache;