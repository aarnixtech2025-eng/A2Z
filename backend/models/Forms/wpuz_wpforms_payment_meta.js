const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const WPFormsPaymentMeta = sequelize.define(
  "WPFormsPaymentMeta",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    payment_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    meta_key: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    meta_value: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_wpforms_payment_meta",
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = WPFormsPaymentMeta;