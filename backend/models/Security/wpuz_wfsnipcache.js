const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WfSnipCache = sequelize.define(
  "WfSnipCache",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    IP: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    expiration: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    body: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    type: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_wfsnipcache",
    timestamps: false,
  }
);

module.exports = WfSnipCache;