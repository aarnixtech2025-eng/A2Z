const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WpuzBwtFailedSubmissions = sequelize.define(
  "WpuzBwtFailedSubmissions",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    submission_date: {
      type: DataTypes.BIGINT,
    },
    submission_type: {
      type: DataTypes.TEXT("tiny"),
    },
    type: {
      type: DataTypes.TEXT("tiny"),
    },
    error: {
      type: DataTypes.TEXT,
    },
    url: {
      type: DataTypes.STRING(200),
    },
  },
  {
    tableName: "wpuz_bwt_failed_submissions",
    timestamps: false,
  }
);

module.exports = WpuzBwtFailedSubmissions;