const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WfFileMods = sequelize.define(
  "WfFileMods",
  {
    filenameMD5: {
      type: DataTypes.BLOB("tiny"),
      primaryKey: true,
    },
    filename: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    real_path: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    knownFile: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
    },
    oldMD5: {
      type: DataTypes.BLOB("tiny"),
      allowNull: true,
    },
    newMD5: {
      type: DataTypes.BLOB("tiny"),
      allowNull: true,
    },
    SHAC: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    stoppedOnSignature: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    stoppedOnPosition: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    isSafeFile: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_wffilemods",
    timestamps: false,
  }
);

module.exports = WfFileMods;