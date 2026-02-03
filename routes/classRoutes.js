const express = require("express");
const router = express.Router();
const classController = require("../controllers/classController");
const middleware = require("../middlewares/auth");

router.post(
  "/",
  middleware.authenticateUser,
  classController.handleCreateClass,
);
router.get("/", middleware.authenticateUser, classController.handleGetAllClass);
router.get(
  "/students",
  middleware.authenticateUser,
  classController.handleGetAllClassWithStudents,
);
router.get(
  "/teachers",
  middleware.authenticateUser,
  classController.handleGetAllClassWithTeacher,
);
router.get(
  "/teachers-students",
  middleware.authenticateUser,
  classController.handleGetAllClassWithTeacherStudent,
);
router.get(
  "/:id",
  middleware.authenticateUser,
  classController.handleGetClassById,
);
router.put(
  "/:id",
  middleware.authenticateUser,
  classController.handleUpdateClassById,
);
router.delete(
  "/:id",
  middleware.authenticateUser,
  classController.handleDeleteClassById,
);

module.exports = router;
