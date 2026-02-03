const jwt = require("jsonwebtoken");
const authRepository = require("../repositories/authRepository");

const authenticateUser = async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).send({
      status: false,
      message: "You must log in to access this resource!",
      data: null,
    });
  }

  try {
    const { email } = jwt.verify(token, process.env.JWT_SECRET);

    const getUserByEmail = await authRepository.handleGetUserByEmail({
      email,
    });

    req.user = getUserByEmail;

    next();
  } catch (err) {
    return res.status(401).send({
      status: false,
      message: "Your session has expired, please log in again!",
      data: null,
    });
  }
};

module.exports = {
  authenticateUser,
};
