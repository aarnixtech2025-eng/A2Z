const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WflsRoleCounts = sequelize.define(
  "WflsRoleCounts",
  {
    serialized_roles: {
      type: DataTypes.BLOB,
      primaryKey: true,
    },
    two_factor_inactive: {
      type: DataTypes.BOOLEAN,
      primaryKey: true,
    },
    user_count: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_wfls_role_counts",
    timestamps: false,
  }
);

module.exports = WflsRoleCounts;