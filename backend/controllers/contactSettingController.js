const ContactSetting = require("../models/ContactSetting");

exports.getContactSettings = async (req, res) => {
  try {
    const settings = await ContactSetting.findAll();
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createContactSettings = async (req, res) => {
  try {
    const { phone, email, address } = req.body;
    const settings = await ContactSetting.create({ phone, email, address });
    res.status(201).json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateContactSettings = async (req, res) => {
  try {
    const { id } = req.params;
    const { phone, email, address } = req.body;
    const settings = await ContactSetting.findByPk(id);
    
    if (!settings) {
      return res.status(404).json({ error: "Contact settings not found" });
    }
    
    await settings.update({ phone, email, address });
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteContactSettings = async (req, res) => {
  try {
    const { id } = req.params;
    const settings = await ContactSetting.findByPk(id);
    
    if (!settings) {
      return res.status(404).json({ error: "Contact settings not found" });
    }
    
    await settings.destroy();
    res.json({ message: "Contact settings deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
