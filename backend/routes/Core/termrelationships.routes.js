const express = require("express");
const router = express.Router();

const termRelationshipController = require("../../controllers/Core/termrelationships.controller");

// Create
router.post("/", termRelationshipController.createTermRelationship);

// Get All
router.get("/", termRelationshipController.getAllTermRelationships);

// Get Single
router.get(
  "/:objectId/:termTaxonomyId",
  termRelationshipController.getTermRelationshipById
);

// Update
router.put(
  "/:objectId/:termTaxonomyId",
  termRelationshipController.updateTermRelationship
);

// Delete
router.delete(
  "/:objectId/:termTaxonomyId",
  termRelationshipController.deleteTermRelationship
);

module.exports = router;