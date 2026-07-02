const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WPFormsLog = sequelize.define(
  "WPFormsLog",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    message: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    types: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    form_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    entry_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_wpforms_logs",
    timestamps: false,
  }
);

module.exports = WPFormsLog;