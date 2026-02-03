const express = require("express");
const authRoutes = require("./authRoutes");
const classRoutes = require("./classRoutes");
const studentsRoutes = require("./studentRoutes");
const teacherRoutes = require("./teacherRoutes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/classes", classRoutes);
router.use("/students", studentsRoutes);
// router.use("/teachers", teacherRoutes);

module.exports = router;
