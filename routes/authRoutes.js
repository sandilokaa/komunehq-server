const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/session/login", authController.handleUserLogin);
router.post("/session/logout", authController.handleUserLogout);

module.exports = router;
