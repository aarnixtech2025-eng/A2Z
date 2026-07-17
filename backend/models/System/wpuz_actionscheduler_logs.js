const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const wpuz_actionscheduler_logs = sequelize.define(
  "wpuz_actionscheduler_logs",
  {
    log_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    action_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    message: {
      type: DataTypes.TEXT,
    },
    log_date_gmt: {
      type: DataTypes.DATE,
    },
    log_date_local: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "wpuz_actionscheduler_logs",
    timestamps: false,
  }
);

module.exports = wpuz_actionscheduler_logs;