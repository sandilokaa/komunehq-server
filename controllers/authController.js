const authService = require("../services/authService");

/* ------------------- Handle User Login ------------------- */

const handleUserLogin = async (req, res) => {
  const { email, password } = req.body;

  const { status, status_code, message, data } =
    await authService.handleUserLogin({
      email,
      password,
    });

  if (status) {
    res.cookie("token", data.token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 2,
    });
  }

  res.status(status_code).send({
    status: status,
    message: message,
    data: {
      id: data?.id ?? null,
      email: data?.email ?? null,
    },
  });
};

/* ------------------- End Handle User Login ------------------- */

/* ------------------- Handle User Logout ------------------- */

const handleUserLogout = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  res.status(200).json({
    message: "Logout successful!",
  });
};

/* ------------------- End Handle User Logout ------------------- */

module.exports = {
  handleUserLogin,
  handleUserLogout,
};
