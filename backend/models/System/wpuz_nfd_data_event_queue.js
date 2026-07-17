const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const wpuz_nfd_data_event_queue = sequelize.define(
  "wpuz_nfd_data_event_queue",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    event: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    attempts: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    reserved_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    available_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_nfd_data_event_queue",
    timestamps: false,
  }
);

module.exports = wpuz_nfd_data_event_queue;