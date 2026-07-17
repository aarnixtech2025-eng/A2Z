const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WfIssues = sequelize.define(
  "WfIssues",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    time: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    lastUpdated: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    status: {
      type: DataTypes.STRING(10),
    },
    type: {
      type: DataTypes.STRING(20),
    },
    severity: {
      type: DataTypes.TINYINT.UNSIGNED,
    },
    ignoreP: {
      type: DataTypes.CHAR(32),
    },
    ignoreC: {
      type: DataTypes.CHAR(32),
    },
    shortMsg: {
      type: DataTypes.STRING(255),
    },
    longMsg: {
      type: DataTypes.TEXT,
    },
    data: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "wpuz_wfissues",
    timestamps: false,
  }
);

module.exports = WfIssues;