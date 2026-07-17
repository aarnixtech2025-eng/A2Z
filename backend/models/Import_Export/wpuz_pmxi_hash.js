const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PmxiHash = sequelize.define(
  "PmxiHash",
  {
    hash: {
      type: DataTypes.BLOB("tiny"),
      primaryKey: true,
    },
    post_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    import_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
    },
    post_type: {
      type: DataTypes.STRING(32),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_pmxi_hash",
    timestamps: false,
  }
);

module.exports = PmxiHash;