const {
  TermRelationship,
  Post,
  TermTaxonomy,
} = require("../../models/Core");

class TermRelationshipService {
  // Create
  async createTermRelationship(data) {
    return await TermRelationship.create(data);
  }

  // Get All
  // Get All with Pagination
async getAllTermRelationships(page = 1, limit = 20) {
  const offset = (page - 1) * limit;

  return await TermRelationship.findAndCountAll({
    include: [
      {
        model: Post,
        as: "post",
        attributes: ["ID", "post_title", "post_status"],
      },
      {
        model: TermTaxonomy,
        as: "taxonomy",
        attributes: [
          "term_taxonomy_id",
          "term_id",
          "taxonomy",
          "count",
        ],
      },
    ],
    limit,
    offset,
    order: [["object_id", "DESC"]],
  });
}
  // Get Single
  async getTermRelationshipById(objectId, termTaxonomyId) {
    return await TermRelationship.findOne({
      where: {
        object_id: objectId,
        term_taxonomy_id: termTaxonomyId,
      },
      include: [
        {
          model: Post,
          as: "post",
        },
        {
          model: TermTaxonomy,
          as: "taxonomy",
        },
      ],
    });
  }

  // Update
  async updateTermRelationship(objectId, termTaxonomyId, data) {
    const relationship = await TermRelationship.findOne({
      where: {
        object_id: objectId,
        term_taxonomy_id: termTaxonomyId,
      },
    });

    if (!relationship) return null;

    await relationship.update(data);

    return relationship;
  }

  // Delete
  async deleteTermRelationship(objectId, termTaxonomyId) {
    const relationship = await TermRelationship.findOne({
      where: {
        object_id: objectId,
        term_taxonomy_id: termTaxonomyId,
      },
    });

    if (!relationship) return false;

    await relationship.destroy();

    return true;
  }
}

module.exports = new TermRelationshipService();