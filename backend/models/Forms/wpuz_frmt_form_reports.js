const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const FormReport = sequelize.define(
  "FormReport",
  {
    report_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    report_value: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_frmt_form_reports",
    timestamps: false,
  }
);

module.exports = FormReport;