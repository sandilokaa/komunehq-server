const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacherController");
const middleware = require("../middlewares/auth");

router.post(
  "/",
  middleware.authenticateUser,
  teacherController.handleCreateTeacher,
);
router.get(
  "/",
  middleware.authenticateUser,
  teacherController.handleGetAllTeacher,
);
router.get(
  "/:id",
  middleware.authenticateUser,
  teacherController.handleGetTeacherById,
);
router.put(
  "/:id",
  middleware.authenticateUser,
  teacherController.handleUpdateTeacherById,
);
router.delete(
  "/:id",
  middleware.authenticateUser,
  teacherController.handleDeleteTeacherById,
);

module.exports = router;
