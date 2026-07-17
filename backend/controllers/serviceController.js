const { Service } = require("../models");
const slugify = require("slugify");

exports.createService = async (
  req,
  res
) => {
  try {
    console.log("Creating service with body:", req.body);
    console.log("File:", req.file);

    let slug = slugify(
      req.body.title,
      {
        lower: true,
        strict: true
      }
    );

    // Check if slug already exists and append random string if needed
    const existingService = await Service.findOne({ where: { slug } });
    if (existingService) {
      slug = `${slug}-${Date.now()}`;
    }

    const service =
      await Service.create({
        title: req.body.title,

        slug: slug,

        shortDescription:
          req.body.shortDescription,

        description:
          req.body.description,

        image: req.file?.filename || null,

        status:
          req.body.status || "active"
      });

    res.status(201).json({
      success: true,
      message:
        "Service created successfully",
      data: service
    });

  } catch (error) {

    console.error("Error creating service:", error);
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

exports.getServices = async (
  req,
  res
) => {

  try {

    const services =
      await Service.findAll({
        order: [
          ["createdAt", "DESC"]
        ]
      });

    res.status(200).json({
      success: true,
      data: services
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.getService = async (
  req,
  res
) => {

  try {

    const service =
      await Service.findByPk(
        req.params.id
      );

    if (!service) {
      return res.status(404).json({
        success: false,
        message:
          "Service not found"
      });
    }

    res.status(200).json({
      success: true,
      data: service
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.updateService = async (
  req,
  res
) => {

  try {

    const service =
      await Service.findByPk(
        req.params.id
      );

    if (!service) {
      return res.status(404).json({
        success: false,
        message:
          "Service not found"
      });
    }

    await service.update({
      title: req.body.title,

      slug: slugify(
        req.body.title,
        {
          lower: true,
          strict: true
        }
      ),

      shortDescription:
        req.body.shortDescription,

      description:
        req.body.description,

      status:
        req.body.status,

      image: req.file
        ? req.file.filename
        : service.image
    });

    res.status(200).json({
      success: true,
      message:
        "Service updated successfully",
      data: service
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.deleteService = async (
  req,
  res
) => {

  try {

    const service =
      await Service.findByPk(
        req.params.id
      );

    if (!service) {
      return res.status(404).json({
        success: false,
        message:
          "Service not found"
      });
    }

    await service.destroy();

    res.status(200).json({
      success: true,
      message:
        "Service deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};