const { Option } = require("../../models/Core");

class OptionService {
  // Create
  async createOption(data) {
    return await Option.create(data);
  }

  // Get All
  async getAllOptions() {
    return await Option.findAll({
      order: [["option_id", "DESC"]],
    });
  }

  // Get By ID
  async getOptionById(id) {
    return await Option.findByPk(id);
  }

  // Update
  async updateOption(id, data) {
    const option = await Option.findByPk(id);

    if (!option) return null;

    await option.update(data);

    return option;
  }

  // Delete
  async deleteOption(id) {
    const option = await Option.findByPk(id);

    if (!option) return false;

    await option.destroy();

    return true;
  }
}

module.exports = new OptionService();