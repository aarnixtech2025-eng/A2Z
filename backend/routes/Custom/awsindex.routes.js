const express = require("express");

const router = express.Router();

const awsIndexController = require("../../controllers/Custom/awsindex.controller");

router.post("/", awsIndexController.createAwsIndex);

router.get("/", awsIndexController.getAllAwsIndex);

router.get("/:id", awsIndexController.getAwsIndexById);

router.put("/:id", awsIndexController.updateAwsIndex);

router.delete("/:id", awsIndexController.deleteAwsIndex);

module.exports = router;