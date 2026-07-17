const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PmxiImage = sequelize.define(
  "PmxiImage",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    attachment_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    image_url: {
      type: DataTypes.STRING(900),
      allowNull: true,
    },
    image_filename: {
      type: DataTypes.STRING(900),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_pmxi_images",
    timestamps: false,
  }
);

module.exports = PmxiImage;