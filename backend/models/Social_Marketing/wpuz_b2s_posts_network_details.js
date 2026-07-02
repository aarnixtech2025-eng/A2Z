const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const B2SPostsNetworkDetails = sequelize.define(
  "B2SPostsNetworkDetails",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    network_id: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    network_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    network_auth_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    network_display_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_b2s_posts_network_details",
    timestamps: false,
  }
);

module.exports = B2SPostsNetworkDetails;