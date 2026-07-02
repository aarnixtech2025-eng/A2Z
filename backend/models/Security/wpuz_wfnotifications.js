const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WfNotifications = sequelize.define(
  "WfNotifications",
  {
    id: {
      type: DataTypes.STRING(32),
      primaryKey: true,
    },
    new: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ctime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    html: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    links: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_wfnotifications",
    timestamps: false,
  }
);

module.exports = WfNotifications;