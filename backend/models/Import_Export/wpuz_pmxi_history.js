const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PmxiHistory = sequelize.define(
  "PmxiHistory",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    import_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    type: {
      type: DataTypes.ENUM(
        "manual",
        "processing",
        "trigger",
        "continue",
        "cli",
        ""
      ),
      allowNull: true,
    },
    time_run: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_pmxi_history",
    timestamps: false,
  }
);

module.exports = PmxiHistory;