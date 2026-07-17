const express = require("express");
const router = express.Router();

const taxonomyController = require("../../controllers/Core/termtaxonomy.controller");

router.post("/", taxonomyController.createTermTaxonomy);

router.get("/", taxonomyController.getAllTermTaxonomies);

router.get("/:id", taxonomyController.getTermTaxonomyById);

router.put("/:id", taxonomyController.updateTermTaxonomy);

router.delete("/:id", taxonomyController.deleteTermTaxonomy);

module.exports = router;