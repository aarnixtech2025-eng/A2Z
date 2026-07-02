const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const RateLimit = sequelize.define(
  "RateLimit",
  {
    rate_limit_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    rate_limit_key: {
      type: DataTypes.STRING(200),
    },
    rate_limit_expiry: {
      type: DataTypes.BIGINT,
    },
    rate_limit_remaining: {
      type: DataTypes.SMALLINT,
    },
  },
  {
    tableName: "wpuz_wc_rate_limits",
    timestamps: false,
  }
);

module.exports = RateLimit;