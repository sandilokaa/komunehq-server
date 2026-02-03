const teacherRepository = require("../repositories/teacherRepository");
const formatFieldName = require("../utils/formatFieldName");

class TeacherService {
  /* ------------------- Handle Create Teacher  ------------------- */

  static async handleCreateTeacher({
    userId,
    fullName,
    subject,
    teacherNumber,
    classIds,
  }) {
    try {
      // ------------------------- Payload Validation ------------------------- //
      if (!fullName) {
        return error("Full name is required");
      }

      if (!subject) {
        return error("Subject is required");
      }

      if (!teacherNumber) {
        return error("Teacher number is required");
      }

      if (!Array.isArray(classIds)) {
        return error("classIds must be an array");
      }

      if (classIds.length === 0) {
        return error("At least one class must be selected");
      }
      // ------------------------- End Payload Validation ------------------------- //

      const teacherCreated = await teacherRepository.handleCreateTeacher({
        userId,
        fullName,
        subject,
        teacherNumber,
        classIds,
      });

      return {
        status: true,
        status_code: 201,
        message: "Successfully created data",
        data: {
          teacher: teacherCreated,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          teacher: null,
        },
      };
    }
  }

  /* ------------------- End Handle Create Teacher  ------------------- */

  /* ------------------- Handle Get All Teacher  ------------------- */

  static async handleGetAllTeacher() {
    try {
      const getTeacher = await teacherRepository.handleGetAllTeacher();

      return {
        status: true,
        status_code: 200,
        message: "Successfully displayed teacher",
        data: {
          teacher: getTeacher,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          teacher: null,
        },
      };
    }
  }

  /* ------------------- End Handle Get All Teacher  ------------------- */

  /* ------------------- Handle Get Teacher By Id  ------------------- */

  static async handleGetTeacherById({ id }) {
    try {
      const getTeacherById = await teacherRepository.handleGetTeacherById({
        id,
      });

      return {
        status: true,
        status_code: 200,
        message: "Data displayed successfully!",
        data: {
          teacher: getTeacherById,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          teacher: null,
        },
      };
    }
  }

  /* ------------------- End Handle Get Teacher By Id  ------------------- */

  /* ------------------- Handle Delete Teacher By Id  ------------------- */

  static async handleDeleteTeacherById({ id }) {
    try {
      const deletedTeacher = await teacherRepository.handleDeleteTeacherById({
        id,
      });

      return {
        status: true,
        status_code: 201,
        message: "Data deleted successfully",
        data: {
          teacher: deletedTeacher,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          teacher: null,
        },
      };
    }
  }

  /* ------------------- End Handle Delete Teacher By Id  ------------------- */

  /* ------------------- Handle Update Teacher By Id  ------------------- */

  static async handleUpdateTeacherById({
    id,
    fullName,
    subject,
    teacherNumber,
  }) {
    try {
      const getTeacherById = await teacherRepository.handleGetTeacherById({
        id,
      });

      if (getTeacherById.id == id) {
        if (!fullName) fullName = getTeacherById.fullName;
        if (!subject) subject = getTeacherById.subject;
        if (!teacherNumber) teacherNumber = getTeacherById.teacherNumber;
      }

      const updatedTeacher = await teacherRepository.handleUpdateTeacherById({
        id,
        fullName,
        subject,
        teacherNumber,
      });

      return {
        status: true,
        status_code: 201,
        message: "Data updated successfully",
        data: {
          teacher: updatedTeacher,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          teacher: null,
        },
      };
    }
  }

  /* ------------------- End Handle Update Teacher By Id  ------------------- */
}

module.exports = TeacherService;
