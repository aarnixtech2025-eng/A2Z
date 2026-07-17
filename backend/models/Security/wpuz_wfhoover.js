const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WfHoover = sequelize.define(
  "WfHoover",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    owner: {
      type: DataTypes.TEXT,
    },
    host: {
      type: DataTypes.TEXT,
    },
    path: {
      type: DataTypes.TEXT,
    },
    hostKey: {
      type: DataTypes.BLOB,
    },
  },
  {
    tableName: "wpuz_wfhoover",
    timestamps: false,
  }
);

module.exports = WfHoover;