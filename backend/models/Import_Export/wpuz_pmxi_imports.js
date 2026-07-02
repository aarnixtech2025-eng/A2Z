const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PmxiImport = sequelize.define(
  "PmxiImport",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    parent_import_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    friendly_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(32),
      allowNull: true,
    },
    feed_type: {
      type: DataTypes.ENUM("xml", "csv", "zip", "gz", ""),
      allowNull: true,
    },
    path: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    xpath: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    options: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    registered_on: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    root_element: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    processing: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    executing: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    triggered: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    queue_chunk_number: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    first_import: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    count: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    imported: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    created: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    updated: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    skipped: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    deleted: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    canceled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    canceled_on: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    failed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    failed_on: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    settings_update_on: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    last_activity: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    iteration: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_pmxi_imports",
    timestamps: false,
  }
);

module.exports = PmxiImport;