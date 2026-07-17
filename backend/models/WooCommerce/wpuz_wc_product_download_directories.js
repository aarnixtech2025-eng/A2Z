const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const ProductDownloadDirectory = sequelize.define(
  "ProductDownloadDirectory",
  {
    url_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING(256),
    },
    enabled: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: "wpuz_wc_product_download_directories",
    timestamps: false,
  }
);

module.exports = ProductDownloadDirectory;