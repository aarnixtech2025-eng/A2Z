const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const RevSliderLayerAnimationBackup = sequelize.define(
  "RevSliderLayerAnimationBackup",
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
    params: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    settings: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_revslider_layer_animations_bkp",
    timestamps: false,
  }
);

module.exports = RevSliderLayerAnimationBackup;