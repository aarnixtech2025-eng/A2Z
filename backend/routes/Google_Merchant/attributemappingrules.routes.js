const express = require("express");
const router = express.Router();

const attributeMappingRulesController = require(
  "../../controllers/Google_Merchant/attributemappingrules.controller"
);

router.post(
  "/",
  attributeMappingRulesController.createRule
);

router.get(
  "/",
  attributeMappingRulesController.getAllRules
);

router.get(
  "/:id",
  attributeMappingRulesController.getRuleById
);

router.put(
  "/:id",
  attributeMappingRulesController.updateRule
);

router.delete(
  "/:id",
  attributeMappingRulesController.deleteRule
);

module.exports = router;