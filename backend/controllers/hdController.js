const { HD } = require("../models");

exports.createHD = async (req, res) => {
  try {
    console.log("Creating HD with body:", req.body);
    console.log("File:", req.file);

    const hd = await HD.create({
      image: req.file?.filename || null
    });

    res.status(201).json({
      success: true,
      message: "HD created successfully",
      data: hd
    });

  } catch (error) {

    console.error("Error creating HD:", error);
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

exports.getHDs = async (req, res) => {

  try {

    const hds = await HD.findAll({
      order: [
        ["createdAt", "DESC"]
      ]
    });

    res.status(200).json({
      success: true,
      data: hds
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.getHD = async (req, res) => {

  try {

    const hd = await HD.findByPk(
      req.params.id
    );

    if (!hd) {
      return res.status(404).json({
        success: false,
        message:
          "HD not found"
      });
    }

    res.status(200).json({
      success: true,
      data: hd
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.updateHD = async (req, res) => {

  try {

    const hd = await HD.findByPk(
      req.params.id
    );

    if (!hd) {
      return res.status(404).json({
        success: false,
        message:
          "HD not found"
      });
    }

    const updateData = {};

    if (req.file) {
      updateData.image = req.file.filename;
    }

    await hd.update(updateData);

    res.status(200).json({
      success: true,
      message:
        "HD updated successfully",
      data: hd
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.deleteHD = async (req, res) => {

  try {

    const hd = await HD.findByPk(
      req.params.id
    );

    if (!hd) {
      return res.status(404).json({
        success: false,
        message:
          "HD not found"
      });
    }

    await hd.destroy();

    res.status(200).json({
      success: true,
      message:
        "HD deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};
