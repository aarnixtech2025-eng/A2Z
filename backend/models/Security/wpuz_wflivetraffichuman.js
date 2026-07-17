const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WfLiveTrafficHuman = sequelize.define(
  "WfLiveTrafficHuman",
  {
    IP: {
      type: DataTypes.BLOB("tiny"),
      primaryKey: true,
    },
    identifier: {
      type: DataTypes.BLOB,
      primaryKey: true,
    },
    expiration: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_wflivetraffichuman",
    timestamps: false,
  }
);

module.exports = WfLiveTrafficHuman;