const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WPFormsTaskMeta = sequelize.define(
  "WPFormsTaskMeta",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    action: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    data: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_wpforms_tasks_meta",
    timestamps: false,
  }
);

module.exports = WPFormsTaskMeta;