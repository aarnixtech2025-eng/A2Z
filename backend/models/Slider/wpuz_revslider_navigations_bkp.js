const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const RevSliderNavigationBackup = sequelize.define(
  "RevSliderNavigationBackup",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: true,
    },
    handle: {
      type: DataTypes.STRING(191),
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(191),
      allowNull: true,
    },
    css: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    markup: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    settings: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_revslider_navigations_bkp",
    timestamps: false,
  }
);

module.exports = RevSliderNavigationBackup;