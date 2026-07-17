const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const wpuz_actionscheduler_claims = sequelize.define(
  "wpuz_actionscheduler_claims",
  {
    claim_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    date_created_gmt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "wpuz_actionscheduler_claims",
    timestamps: false,
  }
);

module.exports = wpuz_actionscheduler_claims;