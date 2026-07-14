const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const FormEntry = sequelize.define(
  "FormEntry",
  {
    entry_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    entry_type: {
      type: DataTypes.STRING(191),
      allowNull: true,
    },

    form_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },

    is_spam: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    date_created: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    draft_id: {
      type: DataTypes.STRING(12),
      allowNull: true,
    },

    status: {
      type: DataTypes.ENUM(
        "active",
        "spam",
        "draft",
        "abandoned"
      ),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_frmt_form_entry",
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = FormEntry;