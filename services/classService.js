const classRepository = require("../repositories/classRepository");
const formatFieldName = require("../utils/formatFieldName");

class ClassService {
  /* ------------------- Handle Create Class  ------------------- */

  static async handleCreateClass({ userId, className, gradeLevel }) {
    try {
      // ------------------------- Payload Validation ------------------------- //
      const requiredFields = {
        userId,
        className,
        gradeLevel,
      };

      for (const [key, value] of Object.entries(requiredFields)) {
        if (!value) {
          return {
            status: false,
            status_code: 400,
            message: `${formatFieldName(key)} is required!`,
            data: {
              class: null,
            },
          };
        }
      }
      // ------------------------- End Payload Validation ------------------------- //

      const classCreated = await classRepository.handleCreateClass({
        userId,
        className,
        gradeLevel,
      });

      return {
        status: true,
        status_code: 201,
        message: "Successfully created data",
        data: {
          class: classCreated,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          class: null,
        },
      };
    }
  }

  /* ------------------- End Handle Create Class  ------------------- */

  /* ------------------- Handle Get All Class  ------------------- */

  static async handleGetAllClass() {
    try {
      const getClass = await classRepository.handleGetAllClass();

      return {
        status: true,
        status_code: 200,
        message: "Successfully displayed class",
        data: {
          class: getClass,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          class: null,
        },
      };
    }
  }

  /* ------------------- End Handle Get All Class  ------------------- */

  /* ------------------- Handle Get All Class With Students ------------------- */

  static async handleGetAllClassWithStudents() {
    try {
      const getClass = await classRepository.handleGetAllClassWithStudents();

      return {
        status: true,
        status_code: 200,
        message: "Successfully displayed class",
        data: {
          class: getClass,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          class: null,
        },
      };
    }
  }

  /* ------------------- End Handle Get All Class With Student ------------------- */

  /* ------------------- Handle Get Class By Id  ------------------- */

  static async handleGetClassById({ id }) {
    try {
      const getClassById = await classRepository.handleGetClassById({
        id,
      });

      return {
        status: true,
        status_code: 200,
        message: "Data displayed successfully!",
        data: {
          class: getClassById,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          class: null,
        },
      };
    }
  }

  /* ------------------- End Handle Get Class By Id  ------------------- */

  /* ------------------- Handle Delete Class By Id  ------------------- */

  static async handleDeleteClassById({ id }) {
    try {
      const deletedClass = await classRepository.handleDeleteClassById({
        id,
      });

      return {
        status: true,
        status_code: 201,
        message: "Data deleted successfully",
        data: {
          class: deletedClass,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          class: null,
        },
      };
    }
  }

  /* ------------------- End Handle Delete Class By Id  ------------------- */

  /* ------------------- Handle Update Class By Id  ------------------- */

  static async handleUpdateClassById({ id, className, gradeLevel }) {
    try {
      const getClassById = await classRepository.handleGetClassById({
        id,
      });

      if (getClassById.id == id) {
        if (!className) className = getClassById.className;
        if (!gradeLevel) gradeLevel = getClassById.gradeLevel;
      }

      const updatedClass = await classRepository.handleUpdateClassById({
        id,
        className,
        gradeLevel,
      });

      return {
        status: true,
        status_code: 201,
        message: "Data updated successfully",
        data: {
          class: updatedClass,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          class: null,
        },
      };
    }
  }

  /* ------------------- End Handle Update Class By Id  ------------------- */
}

module.exports = ClassService;
