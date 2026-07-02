const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const YoastProminentWords = sequelize.define(
  "YoastProminentWords",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    stem: {
      type: DataTypes.STRING(191),
      allowNull: true,
    },
    indexable_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_yoast_prominent_words",
    timestamps: false,
  }
);

module.exports = YoastProminentWords;