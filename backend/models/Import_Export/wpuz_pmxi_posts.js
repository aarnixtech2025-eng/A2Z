const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PmxiPost = sequelize.define(
  "PmxiPost",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    import_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    unique_key: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    product_key: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    iteration: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    specified: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_pmxi_posts",
    timestamps: false,
  }
);

module.exports = PmxiPost;