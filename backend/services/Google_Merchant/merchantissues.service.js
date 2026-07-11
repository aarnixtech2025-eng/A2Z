const {
  MerchantIssues,
  MerchantPriceBenchmark,
} = require("../../models/Google_Merchant");

class MerchantIssuesService {
  // Create
  async createIssue(data) {
    return await MerchantIssues.create(data);
  }

  // Get All
  async getAllIssues() {
    return await MerchantIssues.findAll({
      include: [
        {
          model: MerchantPriceBenchmark,
          as: "benchmark",
        },
      ],
      order: [["id", "DESC"]],
    });
  }

  // Get By ID
  async getIssueById(id) {
    return await MerchantIssues.findByPk(id, {
      include: [
        {
          model: MerchantPriceBenchmark,
          as: "benchmark",
        },
      ],
    });
  }

  // Update
  async updateIssue(id, data) {
    const issue = await MerchantIssues.findByPk(id);

    if (!issue) return null;

    await issue.update(data);

    return issue;
  }

  // Delete
  async deleteIssue(id) {
    const issue = await MerchantIssues.findByPk(id);

    if (!issue) return false;

    await issue.destroy();

    return true;
  }
}

module.exports = new MerchantIssuesService();