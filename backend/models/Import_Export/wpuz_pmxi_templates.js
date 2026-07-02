const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PmxiTemplate = sequelize.define(
  "PmxiTemplate",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    options: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    scheduled: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    is_keep_linebreaks: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    is_leave_html: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    fix_characters: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    meta: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_pmxi_templates",
    timestamps: false,
  }
);

module.exports = PmxiTemplate;