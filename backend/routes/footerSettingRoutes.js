const express = require("express");
const router = express.Router();
const {
  getFooterSettings,
  createFooterSettings,
  updateFooterSettings,
  deleteFooterSettings,
} = require("../controllers/footerSettingController");

router.get("/", getFooterSettings);
router.post("/", createFooterSettings);
router.put("/:id", updateFooterSettings);
router.delete("/:id", deleteFooterSettings);

module.exports = router;
