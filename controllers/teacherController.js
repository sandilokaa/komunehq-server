const teacherService = require("../services/teacherService");

/* ------------------- Handle Create Teacher  ------------------- */

const handleCreateTeacher = async (req, res) => {
  const userId = req.user.id;

  const { fullName, subject, teacherNumber, classIds } = req.body;

  const { status, status_code, message, data } =
    await teacherService.handleCreateTeacher({
      userId,
      fullName,
      subject,
      teacherNumber,
      classIds,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Create Teacher  ------------------- */

/* ------------------- Handle Get All Teacher  ------------------- */

const handleGetAllTeacher = async (req, res) => {
  const { status, status_code, message, data } =
    await teacherService.handleGetAllTeacher();

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Get All Teacher  ------------------- */

/* ------------------- Handle Get Teacher By Id  ------------------- */

const handleGetTeacherById = async (req, res) => {
  const { id } = req.params;

  const { status, status_code, message, data } =
    await teacherService.handleGetTeacherById({
      id,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Get Teacher By Id  ------------------- */

/* ------------------- Handle Delete Teacher By Id  ------------------- */

const handleDeleteTeacherById = async (req, res) => {
  const { id } = req.params;

  const { status, status_code, message, data } =
    await teacherService.handleDeleteTeacherById({ id });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Delete Teacher By Id  ------------------- */

/* ------------------- Handle Update Teacher By Id  ------------------- */

const handleUpdateTeacherById = async (req, res) => {
  const { id } = req.params;

  const { fullName, subject, teacherNumber } = req.body;

  const { status, status_code, message, data } =
    await teacherService.handleUpdateTeacherById({
      id,
      fullName,
      subject,
      teacherNumber,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Update Teacher By Id  ------------------- */

module.exports = {
  handleCreateTeacher,
  handleGetAllTeacher,
  handleGetTeacherById,
  handleUpdateTeacherById,
  handleDeleteTeacherById,
};
