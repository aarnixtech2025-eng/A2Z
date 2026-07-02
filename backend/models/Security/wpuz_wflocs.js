const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WfLocs = sequelize.define(
  "WfLocs",
  {
    IP: {
      type: DataTypes.BLOB("tiny"),
      primaryKey: true,
    },
    ctime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    failed: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    region: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    countryName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    countryCode: {
      type: DataTypes.CHAR(2),
      allowNull: true,
    },
    lat: {
      type: DataTypes.FLOAT(10, 7),
      allowNull: true,
    },
    lon: {
      type: DataTypes.FLOAT(10, 7),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_wflocs",
    timestamps: false,
  }
);

module.exports = WfLocs;