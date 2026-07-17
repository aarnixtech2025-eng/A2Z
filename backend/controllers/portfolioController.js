const {
  Portfolio
} = require("../models");

const slugify =
require("slugify");

exports.createPortfolio =
async (
  req,
  res
) => {

  try {

    const portfolio = await Portfolio.create({
      title: req.body.title || null,
      slug: req.body.title
        ? slugify(req.body.title, { lower: true, strict: true })
        : `vastu-${Date.now()}`,
      category: req.body.category || null,
      clientName: req.body.clientName || null,
      projectUrl: req.body.projectUrl || null,
      technologies: req.body.technologies || null,
      shortDescription: req.body.shortDescription || null,
      description: req.body.description || null,
      featuredImage: req.file ? req.file.filename : null,
      status: req.body.status,
    });

    res.status(201).json({
      success:true,
      data:portfolio
    });

  } catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};

exports.getPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.findAll({
      where: {
        status: "active",
      },
      order: [["createdAt", "DESC"]],
    });

    res.status(200).json({
      success: true,
      data: portfolios,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updatePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findByPk(req.params.id);

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    const updateData = {
      status: req.body.status,
    };

    if (req.file) {
      updateData.featuredImage = req.file.filename;
    }

    await portfolio.update(updateData);

    res.status(200).json({
      success: true,
      data: portfolio,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deletePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findByPk(req.params.id);

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    await portfolio.destroy();

    res.status(200).json({
      success: true,
      message: "Portfolio deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};