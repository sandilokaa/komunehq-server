const parentService = require("../services/parentSevice");

/* ------------------- Handle Create Parent  ------------------- */

const handleCreateParent = async (req, res) => {
  const userId = req.user.id;

  const { fullName, occupation } = req.body;

  const { status, status_code, message, data } =
    await parentService.handleCreateParent({
      userId,
      fullName,
      occupation,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Create Parent  ------------------- */

/* ------------------- Handle Get All Parent  ------------------- */

const handleGetAllParent = async (req, res) => {
  const { status, status_code, message, data } =
    await parentService.handleGetAllParent();

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Get All Parent  ------------------- */

/* ------------------- Handle Get All Parent Student  ------------------- */

const handleGetAllParentStudent = async (req, res) => {
  const { status, status_code, message, data } =
    await parentService.handleGetAllParentStudent();

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Get All Parent Student  ------------------- */

/* ------------------- Handle Get Parent By Id  ------------------- */

const handleGetParentById = async (req, res) => {
  const { id } = req.params;

  const { status, status_code, message, data } =
    await parentService.handleGetParentById({
      id,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Get Parent By Id  ------------------- */

/* ------------------- Handle Delete Parent By Id  ------------------- */

const handleDeleteParentById = async (req, res) => {
  const { id } = req.params;

  const { status, status_code, message, data } =
    await parentService.handleDeleteParentById({ id });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Delete Parent By Id  ------------------- */

/* ------------------- Handle Update Parent By Id  ------------------- */

const handleUpdateParentById = async (req, res) => {
  const { id } = req.params;

  const { fullName, occupation } = req.body;

  const { status, status_code, message, data } =
    await parentService.handleUpdateParentById({
      id,
      fullName,
      occupation,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

/* ------------------- End Handle Update Parent By Id  ------------------- */

module.exports = {
  handleCreateParent,
  handleGetAllParent,
  handleGetAllParentStudent,
  handleGetParentById,
  handleUpdateParentById,
  handleDeleteParentById,
};
