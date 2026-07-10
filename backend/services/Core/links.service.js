const { Link } = require("../../models/Core");

class LinkService {
  // Create Link
  async createLink(data) {
    return await Link.create(data);
  }

  // Get All Links
  async getAllLinks() {
    return await Link.findAll({
      order: [["link_id", "DESC"]],
    });
  }

  // Get Link By ID
  async getLinkById(id) {
    return await Link.findByPk(id);
  }

  // Update Link
  async updateLink(id, data) {
    const link = await Link.findByPk(id);

    if (!link) return null;

    await link.update(data);

    return link;
  }

  // Delete Link
  async deleteLink(id) {
    const link = await Link.findByPk(id);

    if (!link) return false;

    await link.destroy();

    return true;
  }
}

module.exports = new LinkService();