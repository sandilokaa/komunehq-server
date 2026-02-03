const { Class, Student, sequelize } = require("../models");

class ClassRepository {
  /* ------------------- Handle Create Class  ------------------- */

  static async handleCreateClass({ userId, className, gradeLevel }) {
    const classCreated = await Class.create({
      userId,
      className,
      gradeLevel,
    });

    return classCreated;
  }

  /* ------------------- End Handle Create Class  ------------------- */

  /* ------------------- Handle Get All Class  ------------------- */

  static async handleGetAllClass() {
    const query = {
      where: {},
      attributes: ["id", "className", "gradeLevel"],
    };

    const getClass = await Class.findAll(query);

    return getClass;
  }

  /* ------------------- End Handle Get All Class  ------------------- */

  /* ------------------- Handle Get All Class With Student ------------------- */

  static async handleGetAllClassWithStudents() {
    const query = {
      where: {},
      attributes: ["id", "className", "gradeLevel"],
      include: [
        {
          model: Student,
          as: "students",
          attributes: ["fullName", "studentNumber"],
        },
      ],
    };

    const getClass = await Class.findAll(query);

    return getClass;
  }

  /* ------------------- End Handle Get All Class With Student ------------------- */

  /* ------------------- Handle Get Class By Id  ------------------- */

  static async handleGetClassById({ id }) {
    const query = {
      where: { id },
      attributes: ["id", "className", "gradeLevel"],
    };

    const getClassById = Class.findOne(query);

    return getClassById;
  }

  /* ------------------- End Handle Get Class By Id  ------------------- */

  /* ------------------- Handle Delete Class By Id  ------------------- */

  static async handleDeleteClassById({ id }) {
    return await sequelize.transaction(async (t) => {
      await Student.update(
        { classId: null },
        {
          where: { classId: id },
          transaction: t,
        },
      );

      const deletedClass = await Class.destroy({
        where: { id },
        transaction: t,
      });

      return deletedClass;
    });
  }

  /* ------------------- End Handle Delete Class By Id  ------------------- */

  /* ------------------- Handle Update Class By Id  ------------------- */

  static async handleUpdateClassById({ id, className, gradeLevel }) {
    const updatedClass = await Class.update(
      {
        className,
        gradeLevel,
      },
      {
        where: { id },
      },
    );

    return updatedClass;
  }

  /* ------------------- End Handle Update Class By Id  ------------------- */
}

module.exports = ClassRepository;
