const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const wpuz_actionscheduler_actions = sequelize.define(
  "wpuz_actionscheduler_actions",
  {
    action_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    hook: {
      type: DataTypes.STRING(191),
    },
    status: {
      type: DataTypes.STRING(20),
    },
    scheduled_date_gmt: {
      type: DataTypes.DATE,
    },
    scheduled_date_local: {
      type: DataTypes.DATE,
    },
    args: {
      type: DataTypes.STRING(191),
    },
    schedule: {
      type: DataTypes.TEXT("long"),
    },
    group_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    attempts: {
      type: DataTypes.INTEGER,
    },
    last_attempt_gmt: {
      type: DataTypes.DATE,
    },
    last_attempt_local: {
      type: DataTypes.DATE,
    },
    claim_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    extended_args: {
      type: DataTypes.STRING(8000),
    },
    priority: {
      type: DataTypes.TINYINT.UNSIGNED,
    },
  },
  {
    tableName: "wpuz_actionscheduler_actions",
    timestamps: false,
  }
);

module.exports = wpuz_actionscheduler_actions;