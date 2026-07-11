const attributeMappingRulesService = require(
  "../../services/Google_Merchant/attributemappingrules.service"
);

class AttributeMappingRulesController {
  // Create
  async createRule(req, res, next) {
    try {
      const rule =
        await attributeMappingRulesService.createRule(req.body);

      return res.status(201).json({
        success: true,
        message: "Attribute Mapping Rule created successfully.",
        data: rule,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get All
  async getAllRules(req, res, next) {
    try {
      const rules =
        await attributeMappingRulesService.getAllRules();

      return res.status(200).json({
        success: true,
        count: rules.length,
        data: rules,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get By ID
  async getRuleById(req, res, next) {
    try {
      const rule =
        await attributeMappingRulesService.getRuleById(
          req.params.id
        );

      if (!rule) {
        return res.status(404).json({
          success: false,
          message: "Attribute Mapping Rule not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: rule,
      });
    } catch (error) {
      next(error);
    }
  }

  // Update
  async updateRule(req, res, next) {
    try {
      const rule =
        await attributeMappingRulesService.updateRule(
          req.params.id,
          req.body
        );

      if (!rule) {
        return res.status(404).json({
          success: false,
          message: "Attribute Mapping Rule not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Attribute Mapping Rule updated successfully.",
        data: rule,
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete
  async deleteRule(req, res, next) {
    try {
      const deleted =
        await attributeMappingRulesService.deleteRule(
          req.params.id
        );

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Attribute Mapping Rule not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Attribute Mapping Rule deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AttributeMappingRulesController();