const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const AdminNoteAction = sequelize.define(
  "AdminNoteAction",
  {
    action_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    note_id: DataTypes.BIGINT,
    name: DataTypes.STRING(255),
    label: DataTypes.STRING(255),
    query: DataTypes.TEXT("long"),
    status: DataTypes.STRING(255),
    actioned_text: DataTypes.STRING(255),
    nonce_action: DataTypes.STRING(255),
    nonce_name: DataTypes.STRING(255),
  },
  {
    tableName: "wpuz_wc_admin_note_actions",
    timestamps: false,
  }
);

module.exports = AdminNoteAction;