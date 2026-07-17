const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const CustomerLookup = sequelize.define(
  "CustomerLookup",
  {
    customer_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    username: {
      type: DataTypes.STRING(60),
    },
    first_name: {
      type: DataTypes.STRING(255),
    },
    last_name: {
      type: DataTypes.STRING(255),
    },
    email: {
      type: DataTypes.STRING(100),
    },
    date_last_active: {
      type: DataTypes.DATE,
    },
    date_registered: {
      type: DataTypes.DATE,
    },
    country: {
      type: DataTypes.STRING(2),
    },
    postcode: {
      type: DataTypes.STRING(20),
    },
    city: {
      type: DataTypes.STRING(100),
    },
    state: {
      type: DataTypes.STRING(100),
    },
  },
  {
    tableName: "wpuz_wc_customer_lookup",
    timestamps: false,
  }
);

module.exports = CustomerLookup;