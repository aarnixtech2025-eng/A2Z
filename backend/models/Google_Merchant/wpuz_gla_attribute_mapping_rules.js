const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const WpuzGlaAttributeMappingRules = sequelize.define(
  "WpuzGlaAttributeMappingRules",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    attribute: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    source: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    category_condition_type: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    categories: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_gla_attribute_mapping_rules",
    timestamps: false,
  }
);

module.exports = WpuzGlaAttributeMappingRules;