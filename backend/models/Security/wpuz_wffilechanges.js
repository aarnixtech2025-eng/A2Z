const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WFFileChanges = sequelize.define(
  "WFFileChanges",
  {
    filenameHash: {
      type: DataTypes.CHAR(64),
      primaryKey: true,
    },
    file: {
      type: DataTypes.STRING(1000),
    },
    md5: {
      type: DataTypes.CHAR(32),
    },
  },
  {
    tableName: "wpuz_wffilechanges",
    timestamps: false,
  }
);

module.exports = WFFileChanges;