const { Banner } = require("../models");

exports.createBanner = async (req, res) => {
  try {
    const count = await Banner.count();

    if (count >= 1) {
      return res.status(400).json({
        success: false,
        message: "Only one banner entry is allowed"
      });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one banner image is required"
      });
    }

    if (req.files.length > 5) {
      return res.status(400).json({
        success: false,
        message: "Maximum 5 banner images allowed"
      });
    }

    const banners = req.files.map(file => file.filename);

    const banner = await Banner.create({
      title: req.body.title || "",
      description: req.body.description || "",
      banners: banners,
      status: req.body.status || "active"
    });

    res.status(201).json({
      success: true,
      message: "Banner entry created successfully",
      data: banner
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getBanners = async (req, res) => {
  try {
    const banners = await Banner.findAll({
      order: [["createdAt", "DESC"]]
    });

    res.status(200).json({
      success: true,
      count: banners.length,
      data: banners
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getBanner = async (req, res) => {
  try {
    const banner = await Banner.findByPk(req.params.id);

    if (!banner) {
      return res.status(404).json({
        success: false,
        message: "Banner not found"
      });
    }

    res.status(200).json({
      success: true,
      data: banner
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.updateBanner = async (req, res) => {
  try {
    const banner = await Banner.findByPk(req.params.id);

    if (!banner) {
      return res.status(404).json({
        success: false,
        message: "Banner not found"
      });
    }

    let banners = banner.banners;
    if (req.files && req.files.length > 0) {
      if (req.files.length > 5) {
        return res.status(400).json({
          success: false,
          message: "Maximum 5 banner images allowed"
        });
      }
      banners = req.files.map(file => file.filename);
    }

    await banner.update({
      title: req.body.title !== undefined ? req.body.title : banner.title,
      description: req.body.description !== undefined ? req.body.description : banner.description,
      banners: banners,
      status: req.body.status !== undefined ? req.body.status : banner.status
    });

    res.status(200).json({
      success: true,
      message: "Banner updated successfully",
      data: banner
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.deleteBanner = async (req, res) => {
  try {
    const banner = await Banner.findByPk(req.params.id);

    if (!banner) {
      return res.status(404).json({
        success: false,
        message: "Banner not found"
      });
    }

    await banner.destroy();

    res.status(200).json({
      success: true,
      message: "Banner deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};