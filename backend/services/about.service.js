const About = require("../models/About");

/* ==========================================================
   CREATE ABOUT
========================================================== */

const createAbout = async (data) => {
  return await About.create(data);
};

/* ==========================================================
   GET ALL ABOUT
========================================================== */

const getAllAbout = async () => {
  return await About.findAll({
    order: [["id", "DESC"]],
  });
};

/* ==========================================================
   GET ABOUT BY ID
========================================================== */

const getAboutById = async (id) => {
  return await About.findByPk(id);
};

/* ==========================================================
   UPDATE ABOUT
========================================================== */

const updateAbout = async (id, data) => {
  const about = await About.findByPk(id);

  if (!about) return null;

  await about.update(data);

  return about;
};

/* ==========================================================
   DELETE ABOUT
========================================================== */

const deleteAbout = async (id) => {
  const about = await About.findByPk(id);

  if (!about) return null;

  await about.destroy();

  return true;
};

module.exports = {
  createAbout,
  getAllAbout,
  getAboutById,
  updateAbout,
  deleteAbout,
};