const {
  MerchantPriceBenchmark,
  MerchantIssues,
} = require("../../models/Google_Merchant");

class MerchantPriceBenchmarkService {
  // Create
  async createBenchmark(data) {
    return await MerchantPriceBenchmark.create(data);
  }

  // Get All
  async getAllBenchmarks() {
    return await MerchantPriceBenchmark.findAll({
      include: [
        {
          model: MerchantIssues,
          as: "issues",
        },
      ],
      order: [["product_id", "DESC"]],
    });
  }

  // Get By Id
  async getBenchmarkById(id) {
    return await MerchantPriceBenchmark.findByPk(id, {
      include: [
        {
          model: MerchantIssues,
          as: "issues",
        },
      ],
    });
  }

  // Update
  async updateBenchmark(id, data) {
    const benchmark = await MerchantPriceBenchmark.findByPk(id);

    if (!benchmark) return null;

    await benchmark.update(data);

    return benchmark;
  }

  // Delete
  async deleteBenchmark(id) {
    const benchmark = await MerchantPriceBenchmark.findByPk(id);

    if (!benchmark) return false;

    await benchmark.destroy();

    return true;
  }
}

module.exports = new MerchantPriceBenchmarkService();