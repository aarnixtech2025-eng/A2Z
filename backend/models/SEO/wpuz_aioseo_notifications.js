const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AioseoNotification = sequelize.define(
  "AioseoNotification",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    slug: {
      type: DataTypes.STRING(13),
      allowNull: true,
    },
    addon: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    level: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    notification_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    notification_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    start: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    button1_label: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    button1_action: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    button2_label: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    button2_action: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    dismissed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    new: {
      type: DataTypes.BOOLEAN,
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
    tableName: "wpuz_aioseo_notifications",
    timestamps: false,
  }
);

module.exports = AioseoNotification;