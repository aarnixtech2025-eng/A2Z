const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const RevSliderStaticSlide = sequelize.define(
  "RevSliderStaticSlide",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    slider_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    params: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    layers: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    settings: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_revslider_static_slides",
    timestamps: false,
  }
);

module.exports = RevSliderStaticSlide;