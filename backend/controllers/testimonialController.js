const { Testimonial } = require("../models");

exports.createTestimonial = async (
  req,
  res
) => {
  try {

    const testimonial =
      await Testimonial.create({
        clientName:
          req.body.clientName,

        companyName:
          req.body.companyName,

        designation:
          req.body.designation,

        review:
          req.body.review,

        rating:
          req.body.rating,

        image: req.file
          ? req.file.filename
          : null,

        status:
          req.body.status
      });

    res.status(201).json({
      success: true,
      data: testimonial
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.getTestimonials =
  async (req, res) => {

    const testimonials =
      await Testimonial.findAll({
        order: [
          ["createdAt", "DESC"]
        ]
      });

    res.json({
      success: true,
      data: testimonials
    });
};

exports.updateTestimonial =
  async (req, res) => {

    const testimonial =
      await Testimonial.findByPk(
        req.params.id
      );

    if (!testimonial) {
      return res.status(404).json({
        success: false
      });
    }

    await testimonial.update({
      ...req.body,
      image: req.file
        ? req.file.filename
        : testimonial.image
    });

    res.json({
      success: true,
      data: testimonial
    });
};

exports.deleteTestimonial =
  async (req, res) => {

    const testimonial =
      await Testimonial.findByPk(
        req.params.id
      );

    await testimonial.destroy();

    res.json({
      success: true,
      message:
        "Deleted successfully"
    });
};