const { WhyChooseUs } = require("../models");

exports.createWhyChooseUs = async (req, res) => {
  try {
    const count = await WhyChooseUs.count();

    if (count >= 1) {
      return res.status(400).json({
        success: false,
        message: "Only one Why Choose Us entry is allowed"
      });
    }

    const features = req.body.features ? JSON.parse(req.body.features) : [];

    const whyChooseUs = await WhyChooseUs.create({
      image: req.file ? req.file.filename : null,
      description: req.body.description || "",
      features: features,
      clients: req.body.clients || 0,
      projects: req.body.projects || 0,
      services: req.body.services || 0,
      rewards: req.body.rewards || 0,
      experience: req.body.experience || 0,
      status: req.body.status || "active"
    });

    res.status(201).json({
      success: true,
      message: "Why Choose Us entry created successfully",
      data: whyChooseUs
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getWhyChooseUsList = async (req, res) => {
  try {
    const whyChooseUsList = await WhyChooseUs.findAll({
      order: [["createdAt", "DESC"]]
    });

    res.status(200).json({
      success: true,
      count: whyChooseUsList.length,
      data: whyChooseUsList
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getWhyChooseUs = async (req, res) => {
  try {
    const whyChooseUs = await WhyChooseUs.findByPk(req.params.id);

    if (!whyChooseUs) {
      return res.status(404).json({
        success: false,
        message: "Why Choose Us not found"
      });
    }

    res.status(200).json({
      success: true,
      data: whyChooseUs
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.updateWhyChooseUs = async (req, res) => {
  try {
    const whyChooseUs = await WhyChooseUs.findByPk(req.params.id);

    if (!whyChooseUs) {
      return res.status(404).json({
        success: false,
        message: "Why Choose Us not found"
      });
    }

    const features = req.body.features ? JSON.parse(req.body.features) : whyChooseUs.features;

    await whyChooseUs.update({
      image: req.file ? req.file.filename : whyChooseUs.image,
      description: req.body.description !== undefined ? req.body.description : whyChooseUs.description,
      features: features,
      clients: req.body.clients !== undefined ? req.body.clients : whyChooseUs.clients,
      projects: req.body.projects !== undefined ? req.body.projects : whyChooseUs.projects,
      services: req.body.services !== undefined ? req.body.services : whyChooseUs.services,
      rewards: req.body.rewards !== undefined ? req.body.rewards : whyChooseUs.rewards,
      experience: req.body.experience !== undefined ? req.body.experience : whyChooseUs.experience,
      status: req.body.status !== undefined ? req.body.status : whyChooseUs.status
    });

    res.status(200).json({
      success: true,
      message: "Why Choose Us updated successfully",
      data: whyChooseUs
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.deleteWhyChooseUs = async (req, res) => {
  try {
    const whyChooseUs = await WhyChooseUs.findByPk(req.params.id);

    if (!whyChooseUs) {
      return res.status(404).json({
        success: false,
        message: "Why Choose Us not found"
      });
    }

    await whyChooseUs.destroy();

    res.status(200).json({
      success: true,
      message: "Why Choose Us deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
