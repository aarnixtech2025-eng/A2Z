const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WpuzBwtPassedSubmissions = sequelize.define(
  "WpuzBwtPassedSubmissions",
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
    tableName: "wpuz_bwt_passed_submissions",
    timestamps: false,
  }
);

module.exports = WpuzBwtPassedSubmissions;