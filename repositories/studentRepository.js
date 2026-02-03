const { Student } = require("../models");

class StudentRepository {
  /* ------------------- Handle Create Student  ------------------- */

  static async handleCreateStudent({
    userId,
    classId,
    fullName,
    studentNumber,
  }) {
    const studentCreated = await Student.create({
      userId,
      classId,
      fullName,
      studentNumber,
    });

    return studentCreated;
  }

  /* ------------------- End Handle Create Student  ------------------- */

  /* ------------------- Handle Get All Student  ------------------- */

  static async handleGetAllStudent() {
    const query = {
      where: {},
      attributes: ["id", "classId", "fullName", "studentNumber"],
    };

    const getStudent = await Student.findAll(query);

    return getStudent;
  }

  /* ------------------- End Handle Get All Student  ------------------- */

  /* ------------------- Handle Get Student By Id  ------------------- */

  static async handleGetStudentById({ id }) {
    const query = {
      where: { id },
      attributes: ["id", "classId", "fullName", "studentNumber"],
    };

    const getStudentById = Student.findOne(query);

    return getStudentById;
  }

  /* ------------------- End Handle Get Student By Id  ------------------- */

  /* ------------------- Handle Delete Student By Id  ------------------- */

  static async handleDeleteStudentById({ id }) {
    const deletedStudent = await Student.destroy({ where: { id } });

    return deletedStudent;
  }

  /* ------------------- End Handle Delete Student By Id  ------------------- */

  /* ------------------- Handle Update Student By Id  ------------------- */

  static async handleUpdateStudentById({
    id,
    classId,
    fullName,
    studentNumber,
  }) {
    const updatedStudent = await Student.update(
      {
        classId,
        fullName,
        studentNumber,
      },
      {
        where: { id },
      },
    );

    return updatedStudent;
  }

  /* ------------------- End Handle Update Student By Id  ------------------- */
}

module.exports = StudentRepository;
