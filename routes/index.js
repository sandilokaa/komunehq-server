const express = require("express");
const authRoutes = require("./authRoutes");
const classRoutes = require("./classRoutes");
const studentsRoutes = require("./studentRoutes");
const teacherRoutes = require("./teacherRoutes");
const parentRoutes = require("./parentRoutes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/classes", classRoutes);
router.use("/students", studentsRoutes);
router.use("/teachers", teacherRoutes);
router.use("/parents", parentRoutes);

module.exports = router;
