const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WfTrafficRate = sequelize.define(
  "WfTrafficRate",
  {
    eMin: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    IP: {
      type: DataTypes.BLOB,
      primaryKey: true,
    },
    hitType: {
      type: DataTypes.ENUM("hit", "404"),
      primaryKey: true,
    },
    hits: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_wftrafficrates",
    timestamps: false,
  }
);

module.exports = WfTrafficRate;