const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WooCommerceDownloadableProductPermission = sequelize.define(
  "WooCommerceDownloadableProductPermission",
  {
    permission_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    download_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
    },
    product_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    order_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    order_key: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    user_email: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    downloads_remaining: {
      type: DataTypes.STRING(9),
      allowNull: true,
    },
    access_granted: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    access_expires: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    download_count: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_woocommerce_downloadable_product_permissions",
    timestamps: false,
  }
);

module.exports = WooCommerceDownloadableProductPermission;