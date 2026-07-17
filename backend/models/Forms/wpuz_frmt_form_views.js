const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const FormView = sequelize.define(
  "FormView",
  {
    view_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    form_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    page_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    ip: {
      type: DataTypes.STRING(191),
      allowNull: true,
    },
    count: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
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
    tableName: "wpuz_frmt_form_views",
    timestamps: false,
  }
);

module.exports = FormView;