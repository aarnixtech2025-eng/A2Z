const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WFCrawlers = sequelize.define(
  "WFCrawlers",
  {
    IP: {
      type: DataTypes.BLOB("tiny"),
      primaryKey: true,
    },
    patternSig: {
      type: DataTypes.BLOB("tiny"),
      primaryKey: true,
    },
    status: {
      type: DataTypes.CHAR(8),
    },
    lastUpdate: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    PTR: {
      type: DataTypes.STRING(255),
    },
  },
  {
    tableName: "wpuz_wfcrawlers",
    timestamps: false,
  }
);

module.exports = WFCrawlers;