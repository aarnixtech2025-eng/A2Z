const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const YoastSeoLinks = sequelize.define(
  "YoastSeoLinks",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    post_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    target_post_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    indexable_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    target_indexable_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    height: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    width: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    size: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    language: {
      type: DataTypes.STRING(32),
      allowNull: true,
    },
    region: {
      type: DataTypes.STRING(32),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_yoast_seo_links",
    timestamps: false,
  }
);

module.exports = YoastSeoLinks;