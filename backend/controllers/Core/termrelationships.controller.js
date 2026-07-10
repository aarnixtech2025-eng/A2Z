const termRelationshipService = require("../../services/Core/termrelationship.service");

class TermRelationshipController {
  // Create
  async createTermRelationship(req, res, next) {
    try {
      const relationship = await termRelationshipService.createTermRelationship(req.body);

      return res.status(201).json({
        success: true,
        message: "Term Relationship created successfully.",
        data: relationship,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get All
 // Get All with Pagination
async getAllTermRelationships(req, res, next) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const result = await termRelationshipService.getAllTermRelationships(
      page,
      limit
    );

    return res.status(200).json({
      success: true,
      totalRecords: result.count,
      totalPages: Math.ceil(result.count / limit),
      currentPage: page,
      pageSize: limit,
      data: result.rows,
    });
  } catch (error) {
    next(error);
  }
}

  // Get Single
  async getTermRelationshipById(req, res, next) {
    try {
      const relationship =
        await termRelationshipService.getTermRelationshipById(
          req.params.objectId,
          req.params.termTaxonomyId
        );

      if (!relationship) {
        return res.status(404).json({
          success: false,
          message: "Relationship not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: relationship,
      });
    } catch (error) {
      next(error);
    }
  }

  // Update
  async updateTermRelationship(req, res, next) {
    try {
      const relationship =
        await termRelationshipService.updateTermRelationship(
          req.params.objectId,
          req.params.termTaxonomyId,
          req.body
        );

      if (!relationship) {
        return res.status(404).json({
          success: false,
          message: "Relationship not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Relationship updated successfully.",
        data: relationship,
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete
  async deleteTermRelationship(req, res, next) {
    try {
      const deleted =
        await termRelationshipService.deleteTermRelationship(
          req.params.objectId,
          req.params.termTaxonomyId
        );

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Relationship not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Relationship deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new TermRelationshipController();