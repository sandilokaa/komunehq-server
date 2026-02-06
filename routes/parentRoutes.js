const express = require("express");
const router = express.Router();
const parentController = require("../controllers/parentController");
const middleware = require("../middlewares/auth");

router.post(
  "/",
  middleware.authenticateUser,
  parentController.handleCreateParent,
);
router.get(
  "/",
  middleware.authenticateUser,
  parentController.handleGetAllParent,
);
router.get(
  "/students",
  middleware.authenticateUser,
  parentController.handleGetAllParentStudent,
);
router.get(
  "/:id",
  middleware.authenticateUser,
  parentController.handleGetParentById,
);
router.put(
  "/:id",
  middleware.authenticateUser,
  parentController.handleUpdateParentById,
);
router.delete(
  "/:id",
  middleware.authenticateUser,
  parentController.handleDeleteParentById,
);

module.exports = router;
