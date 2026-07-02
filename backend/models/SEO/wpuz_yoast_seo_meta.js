const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const YoastSeoMeta = sequelize.define(
  "YoastSeoMeta",
  {
    object_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
    },
    internal_link_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    incoming_link_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_yoast_seo_meta",
    timestamps: false,
  }
);

module.exports = YoastSeoMeta;