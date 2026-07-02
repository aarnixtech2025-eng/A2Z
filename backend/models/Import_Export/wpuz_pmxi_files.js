const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PmxiFile = sequelize.define(
  "PmxiFile",
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
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    path: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    registered_on: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_pmxi_files",
    timestamps: false,
  }
);

module.exports = PmxiFile;