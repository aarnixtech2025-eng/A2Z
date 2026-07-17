const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const SocialSnapStats = sequelize.define(
  "SocialSnapStats",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    post_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },

    count: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },

    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    network: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    post_type: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    type: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },

    location: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    ip_address: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },

    url: {
      type: DataTypes.STRING(2083),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_socialsnap_stats",
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = SocialSnapStats;