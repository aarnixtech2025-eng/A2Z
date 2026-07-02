const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const wpuz_jetpack_sync_queue = sequelize.define(
  "wpuz_jetpack_sync_queue",
  {
    ID: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    queue_id: {
      type: DataTypes.STRING(50),
    },
    event_id: {
      type: DataTypes.STRING(100),
    },
    event_payload: {
      type: DataTypes.TEXT("long"),
    },
    timestamp: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "wpuz_jetpack_sync_queue",
    timestamps: false,
  }
);

module.exports = wpuz_jetpack_sync_queue;