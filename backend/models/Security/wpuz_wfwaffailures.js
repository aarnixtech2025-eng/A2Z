const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WfWafFailure = sequelize.define(
  "WfWafFailure",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    throwable: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    rule_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_wfwaffailures",
    timestamps: false,
  }
);

module.exports = WfWafFailure;