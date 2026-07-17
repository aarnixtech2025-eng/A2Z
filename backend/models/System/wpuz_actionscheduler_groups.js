const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const wpuz_actionscheduler_groups = sequelize.define(
  "wpuz_actionscheduler_groups",
  {
    group_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    slug: {
      type: DataTypes.STRING(255),
    },
  },
  {
    tableName: "wpuz_actionscheduler_groups",
    timestamps: false,
  }
);

module.exports = wpuz_actionscheduler_groups;