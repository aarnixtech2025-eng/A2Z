const { PortfolioGallery } = require("../models");

exports.createPortfolioGallery = async (req, res) => {
  try {
    console.log("Creating PortfolioGallery with body:", req.body);
    console.log("File:", req.file);

    const portfolioGallery = await PortfolioGallery.create({
      title: req.body.title,
      description: req.body.description || null,
      link: req.body.link || null,
      image: req.file?.filename || null
    });

    res.status(201).json({
      success: true,
      message: "PortfolioGallery created successfully",
      data: portfolioGallery
    });

  } catch (error) {

    console.error("Error creating PortfolioGallery:", error);
    console.error("Error details:", {
      message: error.message,
      name: error.name,
      stack: error.stack
    });
    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.getPortfolioGalleries = async (req, res) => {

  try {

    const portfolioGalleries = await PortfolioGallery.findAll({
      order: [
        ["createdAt", "DESC"]
      ]
    });

    res.status(200).json({
      success: true,
      data: portfolioGalleries
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.getPortfolioGallery = async (req, res) => {

  try {

    const portfolioGallery = await PortfolioGallery.findByPk(
      req.params.id
    );

    if (!portfolioGallery) {
      return res.status(404).json({
        success: false,
        message:
          "PortfolioGallery not found"
      });
    }

    res.status(200).json({
      success: true,
      data: portfolioGallery
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.updatePortfolioGallery = async (req, res) => {

  try {

    const portfolioGallery = await PortfolioGallery.findByPk(
      req.params.id
    );

    if (!portfolioGallery) {
      return res.status(404).json({
        success: false,
        message:
          "PortfolioGallery not found"
      });
    }

    const updateData = {
      title: req.body.title,
      description: req.body.description || null,
      link: req.body.link || null,
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    await portfolioGallery.update(updateData);

    res.status(200).json({
      success: true,
      message:
        "PortfolioGallery updated successfully",
      data: portfolioGallery
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.deletePortfolioGallery = async (req, res) => {

  try {

    const portfolioGallery = await PortfolioGallery.findByPk(
      req.params.id
    );

    if (!portfolioGallery) {
      return res.status(404).json({
        success: false,
        message:
          "PortfolioGallery not found"
      });
    }

    await portfolioGallery.destroy();

    res.status(200).json({
      success: true,
      message:
        "PortfolioGallery deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};
