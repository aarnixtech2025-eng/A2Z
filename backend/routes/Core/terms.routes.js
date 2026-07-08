const express = require("express");
const router = express.Router();

const termController = require("../../controllers/Core/terms.controller");

router.post("/", termController.createTerm);

router.get("/", termController.getAllTerms);

router.get("/:id", termController.getTermById);

router.put("/:id", termController.updateTerm);

router.delete("/:id", termController.deleteTerm);

module.exports = router;