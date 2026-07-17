const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const AdminNote = sequelize.define(
  "AdminNote",
  {
    note_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING(255),
    type: DataTypes.STRING(20),
    locale: DataTypes.STRING(20),
    title: DataTypes.TEXT,
    content: DataTypes.TEXT("long"),
    content_data: DataTypes.TEXT("long"),
    status: DataTypes.STRING(200),
    source: DataTypes.STRING(200),
    date_created: DataTypes.DATE,
    date_reminder: DataTypes.DATE,
    is_snoozable: DataTypes.BOOLEAN,
    layout: DataTypes.STRING(20),
    image: DataTypes.STRING(200),
    is_deleted: DataTypes.BOOLEAN,
    icon: DataTypes.STRING(200),
    is_read: DataTypes.BOOLEAN,
  },
  {
    tableName: "wpuz_wc_admin_notes",
    timestamps: false,
  }
);

module.exports = AdminNote;