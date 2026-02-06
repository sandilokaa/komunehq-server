const studentRepository = require("../repositories/studentRepository");
const formatFieldName = require("../utils/formatFieldName");

class StudentService {
  /* ------------------- Handle Create Student  ------------------- */

  static async handleCreateStudent({
    userId,
    parentId,
    classId,
    fullName,
    studentNumber,
  }) {
    try {
      // ------------------------- Payload Validation ------------------------- //
      const requiredFields = {
        classId,
        parentId,
        fullName,
        studentNumber,
      };

      for (const [key, value] of Object.entries(requiredFields)) {
        if (!value) {
          return {
            status: false,
            status_code: 400,
            message: `${formatFieldName(key)} is required!`,
            data: {
              student: null,
            },
          };
        }
      }
      // ------------------------- End Payload Validation ------------------------- //

      const studentCreated = await studentRepository.handleCreateStudent({
        userId,
        parentId,
        classId,
        fullName,
        studentNumber,
      });

      return {
        status: true,
        status_code: 201,
        message: "Successfully created data",
        data: {
          student: studentCreated,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          student: null,
        },
      };
    }
  }

  /* ------------------- End Handle Create Student  ------------------- */

  /* ------------------- Handle Get All Student  ------------------- */

  static async handleGetAllStudent() {
    try {
      const getStudent = await studentRepository.handleGetAllStudent();

      return {
        status: true,
        status_code: 200,
        message: "Successfully displayed student",
        data: {
          student: getStudent,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          student: null,
        },
      };
    }
  }

  /* ------------------- End Handle Get All Student  ------------------- */

  /* ------------------- Handle Get Student By Id  ------------------- */

  static async handleGetStudentById({ id }) {
    try {
      const getStudentById = await studentRepository.handleGetStudentById({
        id,
      });

      return {
        status: true,
        status_code: 200,
        message: "Data displayed successfully!",
        data: {
          student: getStudentById,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          student: null,
        },
      };
    }
  }

  /* ------------------- End Handle Get Student By Id  ------------------- */

  /* ------------------- Handle Delete Student By Id  ------------------- */

  static async handleDeleteStudentById({ id }) {
    try {
      const deletedStudent = await studentRepository.handleDeleteStudentById({
        id,
      });

      return {
        status: true,
        status_code: 201,
        message: "Data deleted successfully",
        data: {
          student: deletedStudent,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          student: null,
        },
      };
    }
  }

  /* ------------------- End Handle Delete Student By Id  ------------------- */

  /* ------------------- Handle Update Student By Id  ------------------- */

  static async handleUpdateStudentById({
    id,
    classId,
    parentId,
    fullName,
    studentNumber,
  }) {
    try {
      const getStudentById = await studentRepository.handleGetStudentById({
        id,
      });

      if (getStudentById.id == id) {
        if (!classId) classId = getStudentById.classId;
        if (!parentId) parentId = getStudentById.parentId;
        if (!fullName) fullName = getStudentById.fullName;
        if (!studentNumber) studentNumber = getStudentById.studentNumber;
      }

      const updatedStudent = await studentRepository.handleUpdateStudentById({
        id,
        classId,
        parentId,
        fullName,
        studentNumber,
      });

      return {
        status: true,
        status_code: 201,
        message: "Data updated successfully",
        data: {
          student: updatedStudent,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          student: null,
        },
      };
    }
  }

  /* ------------------- End Handle Update Student By Id  ------------------- */
}

module.exports = StudentService;
