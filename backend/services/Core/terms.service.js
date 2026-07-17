const { Term,TermMeta } = require("../../models/Core");

class TermService {
  // Create Term
  async createTerm(data) {
    return await Term.create(data);
  }

  // Get All Terms
  async getAllTerms() {
    return await Term.findAll({
      include: [
        {
          model: TermMeta,
          as: "meta",
        },
      ],
      order: [["term_id", "DESC"]],
    });
  }

  // Get Term By ID
  async getTermById(id) {
    return await Term.findByPk(id, {
      include: [
        {
          model: TermMeta,
          as: "meta",
        },
      ],
    });
  }

  // Update Term
  async updateTerm(id, data) {
    const term = await Term.findByPk(id);

    if (!term) return null;

    await term.update(data);

    return term;
  }

  // Delete Term
  async deleteTerm(id) {
    const term = await Term.findByPk(id);

    if (!term) return false;

    await term.destroy();

    return true;
  }
}

module.exports = new TermService();