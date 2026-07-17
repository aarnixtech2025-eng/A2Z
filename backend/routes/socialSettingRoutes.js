const express = require("express");
const router = express.Router();
const {
  getSocialSettings,
  createSocialSettings,
  updateSocialSettings,
  deleteSocialSettings,
} = require("../controllers/socialSettingController");

router.get("/", getSocialSettings);
router.post("/", createSocialSettings);
router.put("/:id", updateSocialSettings);
router.delete("/:id", deleteSocialSettings);

module.exports = router;
