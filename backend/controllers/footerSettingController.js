const FooterSetting = require("../models/FooterSetting");

exports.getFooterSettings = async (req, res) => {
  try {
    const settings = await FooterSetting.findAll();
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createFooterSettings = async (req, res) => {
  try {
    const { description, copyrightText } = req.body;
    const settings = await FooterSetting.create({ description, copyrightText });
    res.status(201).json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateFooterSettings = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, copyrightText } = req.body;
    const settings = await FooterSetting.findByPk(id);
    
    if (!settings) {
      return res.status(404).json({ error: "Footer settings not found" });
    }
    
    await settings.update({ description, copyrightText });
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteFooterSettings = async (req, res) => {
  try {
    const { id } = req.params;
    const settings = await FooterSetting.findByPk(id);
    
    if (!settings) {
      return res.status(404).json({ error: "Footer settings not found" });
    }
    
    await settings.destroy();
    res.json({ message: "Footer settings deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
