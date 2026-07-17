const {
  User,
  UserMeta,
} = require("../../models/Core");
class UserService {
  /**
   * Create User
   */
  async createUser(data) {
    const user = await User.create(data);
    return user;
  }

  /**
   * Get All Users
   */
  async getAllUsers() {
  return await User.findAll({
    include: [
      {
        model: UserMeta,
        as: "meta",
        attributes: [
          "umeta_id",
          "meta_key",
          "meta_value",
        ],
      },
    ],
    order: [["ID", "DESC"]],
  });
}

  /**
   * Get User By ID
   */
  async getUserById(id) {
    return await User.findByPk(id);
  }

  /**
   * Update User
   */
  async updateUser(id, data) {
    const user = await User.findByPk(id);

    if (!user) {
      return null;
    }

    await user.update(data);

    return user;
  }

  /**
   * Delete User
   */
  async deleteUser(id) {
    const user = await User.findByPk(id);

    if (!user) {
      return null;
    }

    await user.destroy();

    return true;
  }
}

module.exports = new UserService();
