const AwsIndex = require("../../models/Custom/awsindex");

class AwsIndexService {
  // Create
  async createAwsIndex(data) {
    return await AwsIndex.create(data);
  }

  // Get All
  async getAllAwsIndex() {
    return await AwsIndex.findAll({
      order: [["id", "DESC"]],
    });
  }

  // Get By Id
  async getAwsIndexById(id) {
    return await AwsIndex.findByPk(id);
  }

  // Update
  async updateAwsIndex(id, data) {
    const index = await AwsIndex.findByPk(id);

    if (!index) return null;

    await index.update(data);

    return index;
  }

  // Delete
  async deleteAwsIndex(id) {
    const index = await AwsIndex.findByPk(id);

    if (!index) return false;

    await index.destroy();

    return true;
  }
}

module.exports = new AwsIndexService();