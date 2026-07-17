const express = require("express");
const router = express.Router();
const {
  getLogoSettings,
  createLogoSettings,
  updateLogoSettings,
  deleteLogoSettings,
} = require("../controllers/logoSettingController");

router.get("/", getLogoSettings);
router.post("/", createLogoSettings);
router.put("/:id", updateLogoSettings);
router.delete("/:id", deleteLogoSettings);

module.exports = router;
