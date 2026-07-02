const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WfHits = sequelize.define(
  "WfHits",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    attackLogTime: {
      type: DataTypes.DOUBLE,
    },
    ctime: {
      type: DataTypes.DOUBLE,
    },
    IP: {
      type: DataTypes.BLOB("tiny"),
    },
    jsRun: {
      type: DataTypes.TINYINT,
    },
    statusCode: {
      type: DataTypes.INTEGER,
    },
    isGoogle: {
      type: DataTypes.TINYINT,
    },
    userID: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    newVisit: {
      type: DataTypes.TINYINT.UNSIGNED,
    },
    URL: {
      type: DataTypes.TEXT,
    },
    referer: {
      type: DataTypes.TEXT,
    },
    UA: {
      type: DataTypes.TEXT,
    },
    action: {
      type: DataTypes.STRING(64),
    },
    actionDescription: {
      type: DataTypes.TEXT,
    },
    actionData: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "wpuz_wfhits",
    timestamps: false,
  }
);

module.exports = WfHits;