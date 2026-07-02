const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WooCommerceShippingZoneLocation = sequelize.define(
  "WooCommerceShippingZoneLocation",
  {
    location_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    zone_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    location_code: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    location_type: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
  },
  {
    tableName: "wpuz_woocommerce_shipping_zone_locations",
    timestamps: false,
  }
);

module.exports = WooCommerceShippingZoneLocation;