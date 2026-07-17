const SocialSetting = require("../models/SocialSetting");

exports.getSocialSettings = async (req, res) => {
  try {
    const settings = await SocialSetting.findAll();
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createSocialSettings = async (req, res) => {
  try {
    const { facebook, instagram, linkedin, youtube } = req.body;
    const settings = await SocialSetting.create({ facebook, instagram, linkedin, youtube });
    res.status(201).json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSocialSettings = async (req, res) => {
  try {
    const { id } = req.params;
    const { facebook, instagram, linkedin, youtube } = req.body;
    const settings = await SocialSetting.findByPk(id);
    
    if (!settings) {
      return res.status(404).json({ error: "Social settings not found" });
    }
    
    await settings.update({ facebook, instagram, linkedin, youtube });
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteSocialSettings = async (req, res) => {
  try {
    const { id } = req.params;
    const settings = await SocialSetting.findByPk(id);
    
    if (!settings) {
      return res.status(404).json({ error: "Social settings not found" });
    }
    
    await settings.destroy();
    res.json({ message: "Social settings deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
