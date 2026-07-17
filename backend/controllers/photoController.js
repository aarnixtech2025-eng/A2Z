const { Photo } = require("../models");
const slugify = require("slugify");

exports.createPhoto = async (
  req,
  res
) => {
  try {
    console.log("Creating photo with body:", req.body);
    console.log("File:", req.file);
    console.log("Category from body:", req.body.category);

    const photo =
      await Photo.create({
        image: req.file?.filename || null,
        category: req.body.category || null
      });

    res.status(201).json({
      success: true,
      message:
        "Photo created successfully",
      data: photo
    });

  } catch (error) {

    console.error("Error creating photo:", error);
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

exports.getPhotos = async (
  req,
  res
) => {

  try {

    const photos =
      await Photo.findAll({
        order: [
          ["createdAt", "DESC"]
        ]
      });

    res.status(200).json({
      success: true,
      data: photos
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.getPhoto = async (
  req,
  res
) => {

  try {

    const photo =
      await Photo.findByPk(
        req.params.id
      );

    if (!photo) {
      return res.status(404).json({
        success: false,
        message:
          "Photo not found"
      });
    }

    res.status(200).json({
      success: true,
      data: photo
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.updatePhoto = async (
  req,
  res
) => {

  try {

    const photo =
      await Photo.findByPk(
        req.params.id
      );

    if (!photo) {
      return res.status(404).json({
        success: false,
        message:
          "Photo not found"
      });
    }

    const updateData = {
      category: req.body.category
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    await photo.update(updateData);

    res.status(200).json({
      success: true,
      message:
        "Photo updated successfully",
      data: photo
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.deletePhoto = async (
  req,
  res
) => {

  try {

    const photo =
      await Photo.findByPk(
        req.params.id
      );

    if (!photo) {
      return res.status(404).json({
        success: false,
        message:
          "Photo not found"
      });
    }

    await photo.destroy();

    res.status(200).json({
      success: true,
      message:
        "Photo deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};
