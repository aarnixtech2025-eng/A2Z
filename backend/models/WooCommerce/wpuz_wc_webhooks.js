const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Webhook = sequelize.define(
  "Webhook",
  {
    webhook_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    status: DataTypes.STRING(200),
    name: DataTypes.TEXT,
    user_id: DataTypes.BIGINT,
    delivery_url: DataTypes.TEXT,
    secret: DataTypes.TEXT,
    topic: DataTypes.STRING(200),
    date_created: DataTypes.DATE,
    date_created_gmt: DataTypes.DATE,
    date_modified: DataTypes.DATE,
    date_modified_gmt: DataTypes.DATE,
    api_version: DataTypes.SMALLINT,
    failure_count: DataTypes.SMALLINT,
    pending_delivery: DataTypes.BOOLEAN,
  },
  {
    tableName: "wpuz_wc_webhooks",
    timestamps: false,
  }
);

module.exports = Webhook;