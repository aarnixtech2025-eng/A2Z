const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const RevSlider = sequelize.define(
  "RevSlider",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT("tiny"),
      allowNull: true,
    },
    alias: {
      type: DataTypes.TEXT("tiny"),
      allowNull: true,
    },
    params: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    settings: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(191),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_revslider_sliders",
    timestamps: false,
  }
);

module.exports = RevSlider;