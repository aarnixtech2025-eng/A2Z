const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WfStatus = sequelize.define(
  "WfStatus",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    ctime: {
      type: DataTypes.DOUBLE(17, 6).UNSIGNED,
      allowNull: true,
    },
    level: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
    },
    type: {
      type: DataTypes.CHAR(5),
      allowNull: true,
    },
    msg: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_wfstatus",
    timestamps: false,
  }
);

module.exports = WfStatus;