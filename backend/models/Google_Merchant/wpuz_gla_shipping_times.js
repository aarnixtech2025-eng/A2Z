const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const wpuz_gla_shipping_times = sequelize.define(
  "wpuz_gla_shipping_times",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    country: {
      type: DataTypes.STRING(2),
    },
    time: {
      type: DataTypes.BIGINT,
    },
    max_time: {
      type: DataTypes.BIGINT,
    },
  },
  {
    tableName: "wpuz_gla_shipping_times",
    timestamps: false,
  }
);

module.exports = wpuz_gla_shipping_times;