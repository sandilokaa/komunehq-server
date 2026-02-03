const { User } = require("../models");

class AuthRepository {
  /* ------------------- Handle Get User By Email ------------------- */

  static async handleGetUserByEmail({ email }) {
    const getUserByEmail = await User.findOne({
      where: { email },
    });

    return getUserByEmail;
  }

  /* ------------------- End Handle Get User By Email ------------------- */
}

module.exports = AuthRepository;
