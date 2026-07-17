const aboutService = require("../services/about.service");
const multer=require("multer");
/* ==========================================================
   CREATE ABOUT
========================================================== */

const createAbout = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.files);

    const about = await aboutService.createAbout({
      title: req.body.title,
      description: req.body.description,
      ourApproach: req.body.ourApproach,

      image1: req.files?.image1
        ? req.files.image1[0].filename  
        : "",

      image2: req.files?.image2
        ? req.files.image2[0].filename
        : "",

      features: req.body.features
        ? JSON.parse(req.body.features)
        : [],

      status: req.body.status,
    });

    return res.status(201).json({
      success: true,
      message: "About created successfully.",
      data: about,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ==========================================================
   GET ALL ABOUT
========================================================== */

const getAllAbout = async (req, res) => {
  try {
    const about = await aboutService.getAllAbout();

    return res.status(200).json({
      success: true,
      count: about.length,
      data: about,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ==========================================================
   GET ABOUT BY ID
========================================================== */

const getAboutById = async (req, res) => {
  try {
    const about = await aboutService.getAboutById(req.params.id);

    if (!about) {
      return res.status(404).json({
        success: false,
        message: "About not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: about,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ==========================================================
   UPDATE ABOUT
========================================================== */

const updateAbout = async (req, res) => {
  try {
    const about = await aboutService.getAboutById(req.params.id);

    if (!about) {
      return res.status(404).json({
        success: false,
        message: "About not found.",
      });
    }

    const updateData = {
      title: req.body.title,
      description: req.body.description,
      ourApproach: req.body.ourApproach,
      status: req.body.status,
    };

    // Features
    if (req.body.features) {
      updateData.features = JSON.parse(req.body.features);
    }

    // Image1
    if (req.files?.image1) {
      updateData.image1 = req.files.image1[0].filename;
    } else if (req.body.existingImage1) {
      updateData.image1 = req.body.existingImage1;
    }

    // Image2
    if (req.files?.image2) {
      updateData.image2 = req.files.image2[0].filename;
    } else if (req.body.existingImage2) {
      updateData.image2 = req.body.existingImage2;
    }

    const updated = await aboutService.updateAbout(
      req.params.id,
      updateData
    );

    return res.status(200).json({
      success: true,
      message: "About updated successfully.",
      data: updated,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ==========================================================
   DELETE ABOUT
========================================================== */

const deleteAbout = async (req, res) => {
  try {
    const deleted = await aboutService.deleteAbout(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "About not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "About deleted successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createAbout,
  getAllAbout,
  getAboutById,
  updateAbout,
  deleteAbout,
};