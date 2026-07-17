    const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const DownloadLog = sequelize.define(
  "DownloadLog",
  {
    download_log_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    timestamp: {
      type: DataTypes.DATE,
    },
    permission_id: {
      type: DataTypes.BIGINT,
    },
    user_id: {
      type: DataTypes.BIGINT,
    },
    user_ip_address: {
      type: DataTypes.STRING(100),
    },
  },
  {
    tableName: "wpuz_wc_download_log",
    timestamps: false,
  }
);

module.exports = DownloadLog;