const { Inquiry } = require("../models");

exports.createInquiry = async (req, res) => {
  try {

    const inquiry = await Inquiry.create(
      req.body
    );

    res.status(201).json({
      success: true,
      message: "Inquiry submitted",
      data: inquiry
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getInquiries = async (req, res) => {
  try {

    const inquiries = await Inquiry.findAll({
      order: [["createdAt", "DESC"]]
    });

    res.status(200).json({
      success: true,
      data: inquiries
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.updateInquiryStatus = async (
  req,
  res
) => {
  try {

    const inquiry = await Inquiry.findByPk(
      req.params.id
    );

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: "Inquiry not found"
      });
    }

    inquiry.status = req.body.status;

    await inquiry.save();

    res.status(200).json({
      success: true,
      message: "Status updated",
      data: inquiry
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.deleteInquiry = async (
  req,
  res
) => {
  try {

    const inquiry = await Inquiry.findByPk(
      req.params.id
    );

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: "Inquiry not found"
      });
    }

    await inquiry.destroy();

    res.status(200).json({
      success: true,
      message: "Inquiry deleted"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};