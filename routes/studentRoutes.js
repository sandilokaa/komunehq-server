const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const middleware = require("../middlewares/auth");

router.post(
  "/",
  middleware.authenticateUser,
  studentController.handleCreateStudent,
);
router.get(
  "/",
  middleware.authenticateUser,
  studentController.handleGetAllStudent,
);
router.get(
  "/:id",
  middleware.authenticateUser,
  studentController.handleGetStudentById,
);
router.put(
  "/:id",
  middleware.authenticateUser,
  studentController.handleUpdateStudentById,
);
router.delete(
  "/:id",
  middleware.authenticateUser,
  studentController.handleDeleteStudentById,
);

module.exports = router;
