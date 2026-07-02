const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WfPendingIssues = sequelize.define(
  "WfPendingIssues",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    time: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    lastUpdated: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    severity: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
    },
    ignoreP: {
      type: DataTypes.CHAR(32),
      allowNull: true,
    },
    ignoreC: {
      type: DataTypes.CHAR(32),
      allowNull: true,
    },
    shortMsg: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    longMsg: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_wfpendingissues",
    timestamps: false,
  }
);

module.exports = WfPendingIssues;