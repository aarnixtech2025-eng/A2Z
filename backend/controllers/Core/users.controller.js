const userService = require("../../services/Core/users.service");

class UserController {
  /**
   * Create User
   */
  async createUser(req, res, next) {
    try {
      const user = await userService.createUser(req.body);

      return res.status(201).json({
        success: true,
        message: "User created successfully.",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get All Users
   */
  async getAllUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();

      return res.status(200).json({
        success: true,
        data: users,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get User By ID
   */
  async getUserById(req, res, next) {
    try {
      const user = await userService.getUserById(req.params.id);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Update User
   */
  async updateUser(req, res, next) {
    try {
      const user = await userService.updateUser(req.params.id, req.body);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "User updated successfully.",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Delete User
   */
  async deleteUser(req, res, next) {
    try {
      const deleted = await userService.deleteUser(req.params.id);

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "User not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "User deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();