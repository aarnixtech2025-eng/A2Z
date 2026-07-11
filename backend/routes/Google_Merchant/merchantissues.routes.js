const express = require("express");
const router = express.Router();

const merchantIssuesController = require("../../controllers/Google_Merchant/merchantissues.controller");

router.post("/", merchantIssuesController.createIssue);

router.get("/", merchantIssuesController.getAllIssues);

router.get("/:id", merchantIssuesController.getIssueById);

router.put("/:id", merchantIssuesController.updateIssue);

router.delete("/:id", merchantIssuesController.deleteIssue);

module.exports = router;