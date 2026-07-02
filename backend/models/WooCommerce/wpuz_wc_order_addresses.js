const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const OrderAddress = sequelize.define(
  "OrderAddress",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },

    order_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },

    address_type: {
      type: DataTypes.STRING(20),
    },

    first_name: {
      type: DataTypes.TEXT,
    },

    last_name: {
      type: DataTypes.TEXT,
    },

    company: {
      type: DataTypes.TEXT,
    },

    address_1: {
      type: DataTypes.TEXT,
    },

    address_2: {
      type: DataTypes.TEXT,
    },

    city: {
      type: DataTypes.TEXT,
    },

    state: {
      type: DataTypes.TEXT,
    },

    postcode: {
      type: DataTypes.TEXT,
    },

    country: {
      type: DataTypes.TEXT,
    },

    email: {
      type: DataTypes.STRING(320),
    },

    phone: {
      type: DataTypes.STRING(100),
    },
  },
  {
    tableName: "wpuz_wc_order_addresses",
    timestamps: false,
  }
);

module.exports = OrderAddress;