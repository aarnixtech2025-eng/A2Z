const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const WPFormsPayment = sequelize.define(
  "WPFormsPayment",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    form_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    status: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
    },

    subtotal_amount: {
      type: DataTypes.DECIMAL(26, 8),
      allowNull: false,
      defaultValue: 0.0,
    },

    discount_amount: {
      type: DataTypes.DECIMAL(26, 8),
      allowNull: false,
      defaultValue: 0.0,
    },

    total_amount: {
      type: DataTypes.DECIMAL(26, 8),
      allowNull: false,
      defaultValue: 0.0,
    },

    currency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "",
    },

    entry_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    },

    gateway: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
    },

    type: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: "",
    },

    mode: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
    },

    transaction_id: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: "",
    },

    customer_id: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: "",
    },

    subscription_id: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: "",
    },

    subscription_status: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
    },

    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },

    date_created_gmt: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    date_updated_gmt: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    is_published: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: "wpuz_wpforms_payments",
    timestamps: false,
  }
);

module.exports = WPFormsPayment;