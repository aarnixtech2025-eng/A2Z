const { About } = require("../models");

exports.createAbout = async (req, res) => {
  try {
    const count = await About.count();

    if (count >= 1) {
      return res.status(400).json({
        success: false,
        message: "Only one About section is allowed"
      });
    }

    const features = req.body.features ? JSON.parse(req.body.features) : [];

    const about = await About.create({
      title: req.body.title,
      description: req.body.description,
      ourApproach: req.body.ourApproach || "",
      image1: req.files?.image1 ? req.files.image1[0].filename : null,
      image2: req.files?.image2 ? req.files.image2[0].filename : null,
      features: features,
      status: req.body.status || "active"
    });

    res.status(201).json({
      success: true,
      message: "About section created successfully",
      data: about
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getAbouts = async (req, res) => {
  try {
    const abouts = await About.findAll({
      order: [["createdAt", "DESC"]]
    });

    res.status(200).json({
      success: true,
      count: abouts.length,
      data: abouts
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getAbout = async (req, res) => {
  try {
    const about = await About.findByPk(req.params.id);

    if (!about) {
      return res.status(404).json({
        success: false,
        message: "About section not found"
      });
    }

    res.status(200).json({
      success: true,
      data: about
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.updateAbout = async (req, res) => {
  try {
    const about = await About.findByPk(req.params.id);

    if (!about) {
      return res.status(404).json({
        success: false,
        message: "About section not found"
      });
    }

    const features = req.body.features ? JSON.parse(req.body.features) : about.features;

    await about.update({
      title: req.body.title || about.title,
      description: req.body.description || about.description,
      ourApproach: req.body.ourApproach || about.ourApproach,
      image1: req.files?.image1?.[0]?.filename || about.image1,
      image2: req.files?.image2?.[0]?.filename || about.image2,
      features: features,
      status: req.body.status || about.status
    });

    res.status(200).json({
      success: true,
      message: "About section updated successfully",
      data: about
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.deleteAbout = async (req, res) => {
  try {
    const about = await About.findByPk(req.params.id);

    if (!about) {
      return res.status(404).json({
        success: false,
        message: "About section not found"
      });
    }

    await about.destroy();

    res.status(200).json({
      success: true,
      message: "About section deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
