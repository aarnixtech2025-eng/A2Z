const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WfKnownFileList = sequelize.define(
  "WfKnownFileList",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    path: {
      type: DataTypes.TEXT,
    },
    wordpress_path: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "wpuz_wfknownfilelist",
    timestamps: false,
  }
);

module.exports = WfKnownFileList;