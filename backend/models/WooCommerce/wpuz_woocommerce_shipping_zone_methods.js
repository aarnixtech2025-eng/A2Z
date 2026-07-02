const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WooCommerceShippingZoneMethod = sequelize.define(
  "WooCommerceShippingZoneMethod",
  {
    instance_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    zone_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    method_id: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    method_order: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    is_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: "wpuz_woocommerce_shipping_zone_methods",
    timestamps: false,
  }
);

module.exports = WooCommerceShippingZoneMethod;