const { SeoSetting } = require("../models");

exports.createSeo = async (req, res) => {
  try {

    const seo = await SeoSetting.create(
      req.body
    );

    res.status(201).json({
      success: true,
      message: "SEO created",
      data: seo
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.updateSeo = async (req, res) => {
  try {

    const seo = await SeoSetting.findByPk(
      req.params.id
    );

    if (!seo) {
      return res.status(404).json({
        success: false,
        message: "SEO not found"
      });
    }

    await seo.update(req.body);

    res.status(200).json({
      success: true,
      message: "SEO updated",
      data: seo
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getSeoByPage = async (
  req,
  res
) => {
  try {

    const seo = await SeoSetting.findOne({
      where: {
        pageName: req.params.pageName
      }
    });

    if (!seo) {
      return res.status(404).json({
        success: false,
        message: "SEO not found"
      });
    }

    res.status(200).json({
      success: true,
      data: seo
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getAllSeo = async (
  req,
  res
) => {
  try {

    const seoList = await SeoSetting.findAll();

    res.status(200).json({
      success: true,
      data: seoList
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};