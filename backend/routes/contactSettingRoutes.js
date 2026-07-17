const express = require("express");
const router = express.Router();
const {
  getContactSettings,
  createContactSettings,
  updateContactSettings,
  deleteContactSettings,
} = require("../controllers/contactSettingController");

router.get("/", getContactSettings);
router.post("/", createContactSettings);
router.put("/:id", updateContactSettings);
router.delete("/:id", deleteContactSettings);

module.exports = router;
