const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const UserMeta = sequelize.define(
  "UserMeta",
  {
    umeta_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    meta_key: {
      type: DataTypes.STRING(255),
    },
    meta_value: {
      type: DataTypes.TEXT("long"),
    },
  },
  {
    tableName: "wpuz_usermeta",
    timestamps: false,
  }
);

module.exports = UserMeta;