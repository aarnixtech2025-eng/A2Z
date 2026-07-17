const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const B2SUserNetworkSettings = sequelize.define(
  "B2SUserNetworkSettings",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    blog_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    mandant_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    network_auth_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_b2s_user_network_settings",
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = B2SUserNetworkSettings;