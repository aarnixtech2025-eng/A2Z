const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WFBlocks7 = sequelize.define(
  "WFBlocks7",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    IP: {
      type: DataTypes.BLOB("tiny"),
    },
    blockedTime: {
      type: DataTypes.BIGINT,
    },
    reason: {
      type: DataTypes.STRING(255),
    },
    lastAttempt: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    blockedHits: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    expiration: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    parameters: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "wpuz_wfblocks7",
    timestamps: false,
  }
);

module.exports = WFBlocks7;