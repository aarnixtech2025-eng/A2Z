const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WcCategoryLookup = sequelize.define(
  "WcCategoryLookup",
  {
    category_tree_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
    },
    category_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
    },
  },
  {
    tableName: "wpuz_wc_category_lookup",
    timestamps: false,
  }
);

module.exports = WcCategoryLookup;