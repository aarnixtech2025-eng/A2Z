const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ToBufferLog = sequelize.define(
  "ToBufferLog",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },

    post_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    action: {
      type: DataTypes.ENUM(
        "publish",
        "update",
        "repost",
        "bulk_publish"
      ),
      allowNull: true,
    },

    request_sent: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    profile_id: {
      type: DataTypes.STRING(191),
      allowNull: true,
    },

    profile_name: {
      type: DataTypes.STRING(191),
      allowNull: true,
    },

    result: {
      type: DataTypes.ENUM(
        "success",
        "test",
        "pending",
        "warning",
        "error"
      ),
      allowNull: true,
    },

    result_message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    status_text: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    status_created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    status_due_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_to_buffer_log",
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = ToBufferLog;