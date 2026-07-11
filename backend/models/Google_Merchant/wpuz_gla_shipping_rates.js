const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const wpuz_gla_shipping_rates = sequelize.define(
  "wpuz_gla_shipping_rates",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    country: {
      type: DataTypes.STRING(2),
    },
    method: {
      type: DataTypes.STRING(30),
    },
    currency: {
      type: DataTypes.STRING(3),
    },
    rate: {
      type: DataTypes.DOUBLE,
    },
    options: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "wpuz_gla_shipping_rates",
    timestamps: false,
  }
);

module.exports = wpuz_gla_shipping_rates;