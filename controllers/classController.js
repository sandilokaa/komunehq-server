const classService = require("../services/classService");

/* ------------------- Handle Create Class  ------------------- */

const handleCreateClass = async (req, res) => {
  const userId = req.user.id;

  const { className, gradeLevel } = req.body;

  const { status, status_code, message, data } =
    await classService.handleCreateClass({
      userId,
      className,
      gradeLevel,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Create Class  ------------------- */

/* ------------------- Handle Get All Class  ------------------- */

const handleGetAllClass = async (req, res) => {
  const { status, status_code, message, data } =
    await classService.handleGetAllClass();

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Get All Class  ------------------- */

/* ------------------- Handle Get All Class With Student  ------------------- */

const handleGetAllClassWithStudents = async (req, res) => {
  const { status, status_code, message, data } =
    await classService.handleGetAllClassWithStudents();

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Get All Class With Student ------------------- */

/* ------------------- Handle Get Class By Id  ------------------- */

const handleGetClassById = async (req, res) => {
  const { id } = req.params;

  const { status, status_code, message, data } =
    await classService.handleGetClassById({
      id,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Get Class By Id  ------------------- */

/* ------------------- Handle Delete Class By Id  ------------------- */

const handleDeleteClassById = async (req, res) => {
  const { id } = req.params;

  const { status, status_code, message, data } =
    await classService.handleDeleteClassById({ id });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Delete Class By Id  ------------------- */

/* ------------------- Handle Update Class By Id  ------------------- */

const handleUpdateClassById = async (req, res) => {
  const { id } = req.params;

  const { className, gradeLevel } = req.body;

  const { status, status_code, message, data } =
    await classService.handleUpdateClassById({
      id,
      className,
      gradeLevel,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Update Class By Id  ------------------- */

module.exports = {
  handleCreateClass,
  handleGetAllClass,
  handleGetAllClassWithStudents,
  handleGetClassById,
  handleUpdateClassById,
  handleDeleteClassById,
};
