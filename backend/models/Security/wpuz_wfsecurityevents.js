const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WfSecurityEvent = sequelize.define(
  "WfSecurityEvent",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    event_time: {
      type: DataTypes.DOUBLE(14, 4),
      allowNull: true,
    },
    state: {
      type: DataTypes.ENUM("new", "sending", "sent"),
      allowNull: true,
    },
    state_timestamp: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_wfsecurityevents",
    timestamps: false,
  }
);

module.exports = WfSecurityEvent;