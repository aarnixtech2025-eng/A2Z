const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const B2SUserContact = sequelize.define(
  "B2SUserContact",
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
    name_mandant: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    name_presse: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    anrede_presse: {
      type: DataTypes.ENUM("0", "1", "2"),
      allowNull: true,
    },
    vorname_presse: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    nachname_presse: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    strasse_presse: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    nummer_presse: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    plz_presse: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    ort_presse: {
      type: DataTypes.STRING(75),
      allowNull: true,
    },
    land_presse: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    email_presse: {
      type: DataTypes.STRING(75),
      allowNull: true,
    },
    telefon_presse: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    fax_presse: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    url_presse: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_b2s_user_contact",
    timestamps: false,
  }
);

module.exports = B2SUserContact;