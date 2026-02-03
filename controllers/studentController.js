const studentService = require("../services/studentService");

/* ------------------- Handle Create Student  ------------------- */

const handleCreateStudent = async (req, res) => {
  const userId = req.user.id;

  const { classId, fullName, studentNumber } = req.body;

  const { status, status_code, message, data } =
    await studentService.handleCreateStudent({
      userId,
      classId,
      fullName,
      studentNumber,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Create Student  ------------------- */

/* ------------------- Handle Get All Student  ------------------- */

const handleGetAllStudent = async (req, res) => {
  const { status, status_code, message, data } =
    await studentService.handleGetAllStudent();

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Get All Student  ------------------- */

/* ------------------- Handle Get Student By Id  ------------------- */

const handleGetStudentById = async (req, res) => {
  const { id } = req.params;

  const { status, status_code, message, data } =
    await studentService.handleGetStudentById({
      id,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Get Student By Id  ------------------- */

/* ------------------- Handle Delete Student By Id  ------------------- */

const handleDeleteStudentById = async (req, res) => {
  const { id } = req.params;

  const { status, status_code, message, data } =
    await studentService.handleDeleteStudentById({ id });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Delete Student By Id  ------------------- */

/* ------------------- Handle Update Student By Id  ------------------- */

const handleUpdateStudentById = async (req, res) => {
  const { id } = req.params;

  const { classId, fullName, studentNumber } = req.body;

  const { status, status_code, message, data } =
    await studentService.handleUpdateStudentById({
      id,
      classId,
      fullName,
      studentNumber,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Update Student By Id  ------------------- */

module.exports = {
  handleCreateStudent,
  handleGetAllStudent,
  handleGetStudentById,
  handleUpdateStudentById,
  handleDeleteStudentById,
};
