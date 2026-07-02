const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ProductMetaLookup = sequelize.define(
  "ProductMetaLookup",
  {
    product_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    sku: {
      type: DataTypes.STRING(100),
    },
    virtual: {
      type: DataTypes.BOOLEAN,
    },
    downloadable: {
      type: DataTypes.BOOLEAN,
    },
    min_price: {
      type: DataTypes.DECIMAL(19, 4),
    },
    max_price: {
      type: DataTypes.DECIMAL(19, 4),
    },
    onsale: {
      type: DataTypes.BOOLEAN,
    },
    stock_quantity: {
      type: DataTypes.DOUBLE,
    },
    stock_status: {
      type: DataTypes.STRING(100),
    },
    rating_count: {
      type: DataTypes.BIGINT,
    },
    average_rating: {
      type: DataTypes.DECIMAL(3, 2),
    },
    total_sales: {
      type: DataTypes.BIGINT,
    },
    tax_status: {
      type: DataTypes.STRING(100),
    },
    tax_class: {
      type: DataTypes.STRING(100),
    },
    global_unique_id: {
      type: DataTypes.STRING(100),
    },
  },
  {
    tableName: "wpuz_wc_product_meta_lookup",
    timestamps: false,
  }
);

module.exports = ProductMetaLookup;