const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WooCommerceShippingZone = sequelize.define(
  "WooCommerceShippingZone",
  {
    zone_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    zone_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    zone_order: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: "wpuz_woocommerce_shipping_zones",
    timestamps: false,
  }
);

module.exports = WooCommerceShippingZone;