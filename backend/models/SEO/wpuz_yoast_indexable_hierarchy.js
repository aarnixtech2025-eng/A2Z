const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const YoastIndexableHierarchy = sequelize.define(
  "YoastIndexableHierarchy",
  {
    indexable_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    ancestor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    depth: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    blog_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_yoast_indexable_hierarchy",
    timestamps: false,
  }
);

module.exports = YoastIndexableHierarchy;