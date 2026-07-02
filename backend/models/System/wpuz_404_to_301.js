const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Wpuz404To301 = sequelize.define(
  "Wpuz404To301",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
    },
    url: {
      type: DataTypes.STRING(512),
    },
    ref: {
      type: DataTypes.STRING(512),
    },
    ip: {
      type: DataTypes.STRING(40),
    },
    ua: {
      type: DataTypes.STRING(512),
    },
    redirect: {
      type: DataTypes.STRING(512),
    },
    options: {
      type: DataTypes.TEXT("long"),
    },
    status: {
      type: DataTypes.BIGINT,
    },
  },
  {
    tableName: "wpuz_404_to_301",
    timestamps: false,
  }
);

module.exports = Wpuz404To301;