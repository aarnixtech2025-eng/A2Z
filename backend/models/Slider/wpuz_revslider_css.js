const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const RevSliderCss = sequelize.define(
  "RevSliderCss",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    handle: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    settings: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    hover: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    advanced: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    params: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_revslider_css",
    timestamps: false,
  }
);

module.exports = RevSliderCss;