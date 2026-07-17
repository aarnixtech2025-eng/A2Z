const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WFConfig = sequelize.define(
  "WFConfig",
  {
    name: {
      type: DataTypes.STRING(100),
      primaryKey: true,
    },
    val: {
      type: DataTypes.BLOB("long"),
    },
    autoload: {
      type: DataTypes.ENUM("no", "yes"),
    },
  },
  {
    tableName: "wpuz_wfconfig",
    timestamps: false,
  }
);

module.exports = WFConfig;