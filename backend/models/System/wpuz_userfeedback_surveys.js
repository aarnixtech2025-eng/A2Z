const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WpuzUserfeedbackSurveys = sequelize.define(
  "WpuzUserfeedbackSurveys",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(128),
    },
    status: {
      type: DataTypes.ENUM("publish", "draft", "trash"),
    },
    questions: {
      type: DataTypes.TEXT("long"),
    },
    impressions: {
      type: DataTypes.BIGINT,
    },
    settings: {
      type: DataTypes.TEXT,
    },
    notifications: {
      type: DataTypes.TEXT,
    },
    publish_at: {
      type: DataTypes.DATE,
    },
    created_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "wpuz_userfeedback_surveys",
    timestamps: false,
  }
);

module.exports = WpuzUserfeedbackSurveys;