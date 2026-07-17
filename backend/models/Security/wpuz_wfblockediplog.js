const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WFBlockedIPLog = sequelize.define(
  "WFBlockedIPLog",
  {
    IP: {
      type: DataTypes.BLOB("tiny"),
      primaryKey: true,
    },
    countryCode: {
      type: DataTypes.STRING(2),
    },
    blockCount: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    unixday: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    blockType: {
      type: DataTypes.STRING(50),
      primaryKey: true,
    },
  },
  {
    tableName: "wpuz_wfblockediplog",
    timestamps: false,
  }
);

module.exports = WFBlockedIPLog;