const linkService = require("../../services/Core/links.service");

class LinkController {
  // Create
  async createLink(req, res, next) {
    try {
      const link = await linkService.createLink(req.body);

      return res.status(201).json({
        success: true,
        message: "Link created successfully.",
        data: link,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get All
  async getAllLinks(req, res, next) {
    try {
      const links = await linkService.getAllLinks();

      return res.status(200).json({
        success: true,
        count: links.length,
        data: links,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get By ID
  async getLinkById(req, res, next) {
    try {
      const link = await linkService.getLinkById(req.params.id);

      if (!link) {
        return res.status(404).json({
          success: false,
          message: "Link not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: link,
      });
    } catch (error) {
      next(error);
    }
  }

  // Update
  async updateLink(req, res, next) {
    try {
      const link = await linkService.updateLink(
        req.params.id,
        req.body
      );

      if (!link) {
        return res.status(404).json({
          success: false,
          message: "Link not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Link updated successfully.",
        data: link,
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete
  async deleteLink(req, res, next) {
    try {
      const deleted = await linkService.deleteLink(req.params.id);

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Link not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Link deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new LinkController();