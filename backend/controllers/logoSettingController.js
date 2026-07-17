const LogoSetting = require("../models/LogoSetting");

exports.getLogoSettings = async (req, res) => {
  try {
    const settings = await LogoSetting.findAll();
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createLogoSettings = async (req, res) => {
  try {
    const { logo } = req.body;
    const settings = await LogoSetting.create({ logo });
    res.status(201).json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateLogoSettings = async (req, res) => {
  try {
    const { id } = req.params;
    const { logo } = req.body;
    const settings = await LogoSetting.findByPk(id);
    
    if (!settings) {
      return res.status(404).json({ error: "Logo settings not found" });
    }
    
    await settings.update({ logo });
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteLogoSettings = async (req, res) => {
  try {
    const { id } = req.params;
    const settings = await LogoSetting.findByPk(id);
    
    if (!settings) {
      return res.status(404).json({ error: "Logo settings not found" });
    }
    
    await settings.destroy();
    res.json({ message: "Logo settings deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
