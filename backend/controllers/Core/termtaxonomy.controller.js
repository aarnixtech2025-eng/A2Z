const termTaxonomyService = require("../../services/Core/termtaxonomy.service");

class TermTaxonomyController {
  /**
   * Create Term Taxonomy
   */
  async createTermTaxonomy(req, res, next) {
    try {
      const taxonomy = await termTaxonomyService.createTermTaxonomy(req.body);

      return res.status(201).json({
        success: true,
        message: "Term taxonomy created successfully.",
        data: taxonomy,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get All Term Taxonomies
   */
  async getAllTermTaxonomies(req, res, next) {
    try {
      const taxonomies = await termTaxonomyService.getAllTermTaxonomies();

      return res.status(200).json({
        success: true,
        data: taxonomies,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get Term Taxonomy By ID
   */
  async getTermTaxonomyById(req, res, next) {
    try {
      const taxonomy = await termTaxonomyService.getTermTaxonomyById(
        req.params.id
      );

      if (!taxonomy) {
        return res.status(404).json({
          success: false,
          message: "Term taxonomy not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: taxonomy,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Update Term Taxonomy
   */
  async updateTermTaxonomy(req, res, next) {
    try {
      const taxonomy = await termTaxonomyService.updateTermTaxonomy(
        req.params.id,
        req.body
      );

      if (!taxonomy) {
        return res.status(404).json({
          success: false,
          message: "Term taxonomy not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Term taxonomy updated successfully.",
        data: taxonomy,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Delete Term Taxonomy
   */
  async deleteTermTaxonomy(req, res, next) {
    try {
      const deleted = await termTaxonomyService.deleteTermTaxonomy(
        req.params.id
      );

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Term taxonomy not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Term taxonomy deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new TermTaxonomyController();