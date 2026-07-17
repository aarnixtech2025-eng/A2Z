const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const ProductAttributesLookup = sequelize.define(
  "ProductAttributesLookup",
  {
    product_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    product_or_parent_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    taxonomy: {
      type: DataTypes.STRING(32),
      primaryKey: true,
    },
    term_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    is_variation_attribute: {
      type: DataTypes.BOOLEAN,
    },
    in_stock: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: "wpuz_wc_product_attributes_lookup",
    timestamps: false,
  }
);

module.exports = ProductAttributesLookup;