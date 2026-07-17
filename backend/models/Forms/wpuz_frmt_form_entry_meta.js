const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const FormEntryMeta = sequelize.define(
  "FormEntryMeta",
  {
    meta_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    entry_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,

      references: {
        model: "wpuz_frmt_form_entry",
        key: "entry_id",
      },

      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },

    meta_key: {
      type: DataTypes.STRING(191),
      allowNull: true,
    },

    meta_value: {
      type: DataTypes.TEXT("long"),
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
    tableName: "wpuz_frmt_form_entry_meta",
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = FormEntryMeta;