const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const wpuz_loginizer_logs = sequelize.define(
  "wpuz_loginizer_logs",
  {
    username: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    lockout: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ip: {
      type: DataTypes.STRING(255),
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_loginizer_logs",
    timestamps: false,
  }
);

module.exports = wpuz_loginizer_logs;