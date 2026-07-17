const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WpuzUserfeedbackSurveyResponses = sequelize.define(
  "WpuzUserfeedbackSurveyResponses",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    survey_id: {
      type: DataTypes.BIGINT,
    },
    answers: {
      type: DataTypes.TEXT("long"),
    },
    page_submitted: {
      type: DataTypes.TEXT,
    },
    user_ip: {
      type: DataTypes.STRING(256),
    },
    user_browser: {
      type: DataTypes.STRING(128),
    },
    user_os: {
      type: DataTypes.STRING(128),
    },
    user_device: {
      type: DataTypes.STRING(64),
    },
    status: {
      type: DataTypes.ENUM("publish", "draft", "trash"),
    },
    submitted_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "wpuz_userfeedback_survey_responses",
    timestamps: false,
  }
);

module.exports = WpuzUserfeedbackSurveyResponses;