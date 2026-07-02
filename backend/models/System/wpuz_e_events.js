const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const wpuz_e_events = sequelize.define(
  "wpuz_e_events",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    event_data: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_e_events",
    timestamps: false,
  }
);

module.exports = wpuz_e_events;