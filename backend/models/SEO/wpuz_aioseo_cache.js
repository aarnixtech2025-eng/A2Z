const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AioseoCache = sequelize.define(
  "AioseoCache",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    key: {
      type: DataTypes.STRING(80),
      allowNull: true,
    },
    value: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    expiration: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_aioseo_cache",
    timestamps: false,
  }
);

module.exports = AioseoCache;