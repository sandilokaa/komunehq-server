const authRepository = require("../repositories/authRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthService {
  /* ------------------- Handle User Login ------------------- */

  static async handleUserLogin({ email, password }) {
    try {
      // ------------------------- Payload Validation ------------------------- //

      if (!email) {
        return {
          status: false,
          status_code: 400,
          message: "Email is required!",
          data: {
            userLogin: null,
          },
        };
      }

      if (!password) {
        return {
          status: false,
          status_code: 400,
          message: "Password is required!",
          data: {
            userLogin: null,
          },
        };
      } else if (password.length < 8) {
        return {
          status: false,
          status_code: 400,
          message: "User password is at least 8 characters long!",
          data: {
            userLogin: null,
          },
        };
      }

      // ------------------------- End Payload Validation ------------------------- //

      const getUserByEmail = await authRepository.handleGetUserByEmail({
        email,
      });

      if (!getUserByEmail) {
        return {
          status: false,
          status_code: 404,
          message: "Email not registered ):",
          data: {
            userLogin: null,
          },
        };
      } else {
        const isPasswordMatch = await bcrypt.compare(
          password,
          getUserByEmail.password,
        );

        if (isPasswordMatch) {
          const token = jwt.sign(
            {
              id: getUserByEmail.id,
              email: getUserByEmail.email,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: process.env.JWT_EXPIRES_IN,
            },
          );

          return {
            status: true,
            status_code: 201,
            message: "User login successfully!",
            data: {
              token,
              id: getUserByEmail.id,
              email: getUserByEmail.email,
            },
          };
        } else {
          return {
            status: false,
            status_code: 400,
            message: "Your email or password is incorrect!",
            data: {
              userLogin: null,
            },
          };
        }
      }
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          userLogin: null,
        },
      };
    }
  }

  /* ------------------- End Handle User Login ------------------- */
}

module.exports = AuthService;
