const {
  AttributeMappingRules,
} = require("../../models/Google_Merchant");

class AttributeMappingRulesService {
  // Create
  async createRule(data) {
    return await AttributeMappingRules.create(data);
  }

  // Get All
  async getAllRules() {
    return await AttributeMappingRules.findAll({
      order: [["id", "DESC"]],
    });
  }

  // Get By ID
  async getRuleById(id) {
    return await AttributeMappingRules.findByPk(id);
  }

  // Update
  async updateRule(id, data) {
    const rule = await AttributeMappingRules.findByPk(id);

    if (!rule) return null;

    await rule.update(data);

    return rule;
  }

  // Delete
  async deleteRule(id) {
    const rule = await AttributeMappingRules.findByPk(id);

    if (!rule) return false;

    await rule.destroy();

    return true;
  }
}

module.exports = new AttributeMappingRulesService();