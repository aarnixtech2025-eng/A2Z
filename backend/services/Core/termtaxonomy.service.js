const { TermTaxonomy, Term } = require("../../models/Core");

class TermTaxonomyService {
  async createTermTaxonomy(data) {
    return await TermTaxonomy.create(data);
  }

  async getAllTermTaxonomies() {
    return await TermTaxonomy.findAll({
      include: [
        {
          model: Term,
          as: "term",
        },
      ],
      order: [["term_taxonomy_id", "DESC"]],
    });
  }

  async getTermTaxonomyById(id) {
    return await TermTaxonomy.findByPk(id, {
      include: [
        {
          model: Term,
          as: "term",
        },
      ],
    });
  }

  async updateTermTaxonomy(id, data) {
    const taxonomy = await TermTaxonomy.findByPk(id);

    if (!taxonomy) return null;

    await taxonomy.update(data);

    return taxonomy;
  }

  async deleteTermTaxonomy(id) {
    const taxonomy = await TermTaxonomy.findByPk(id);

    if (!taxonomy) return false;

    await taxonomy.destroy();

    return true;
  }
}

module.exports = new TermTaxonomyService();