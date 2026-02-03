const { Teacher, TeacherClass, sequelize } = require("../models");

class TeacherRepository {
  /* ------------------- Handle Create Teacher  ------------------- */

  static async handleCreateTeacher({
    userId,
    fullName,
    subject,
    teacherNumber,
    classIds,
  }) {
    return await sequelize.transaction(async (t) => {
      const teacherCreated = await Teacher.create(
        {
          userId,
          fullName,
          subject,
          teacherNumber,
        },
        { transaction: t },
      );

      if (Array.isArray(classIds) && classIds.length > 0) {
        const payload = classIds.map((classId) => ({
          teacherId: teacherCreated.id,
          classId,
        }));

        await TeacherClass.bulkCreate(payload, { transaction: t });
      }

      return teacherCreated;
    });
  }

  /* ------------------- End Handle Create Teacher  ------------------- */

  /* ------------------- Handle Get All Teacher  ------------------- */

  static async handleGetAllTeacher() {
    const query = {
      where: {},
      attributes: ["id", "fullName", "subject", "teacherNumber"],
    };

    const getTeacher = await Teacher.findAll(query);

    return getTeacher;
  }

  /* ------------------- End Handle Get All Teacher  ------------------- */

  /* ------------------- Handle Get Teacher By Id  ------------------- */

  static async handleGetTeacherById({ id }) {
    const query = {
      where: { id },
      attributes: ["id", "fullName", "subject", "teacherNumber"],
    };

    const getTeacherById = Teacher.findOne(query);

    return getTeacherById;
  }

  /* ------------------- End Handle Get Teacher By Id  ------------------- */

  /* ------------------- Handle Delete Teacher By Id  ------------------- */

  static async handleDeleteTeacherById({ id }) {
    const deletedTeacher = await Teacher.destroy({ where: { id } });

    return deletedTeacher;
  }

  /* ------------------- End Handle Delete Teacher By Id  ------------------- */

  /* ------------------- Handle Update Teacher By Id  ------------------- */

  static async handleUpdateTeacherById({
    id,
    fullName,
    subject,
    teacherNumber,
  }) {
    const updatedTeacher = await Teacher.update(
      {
        fullName,
        subject,
        teacherNumber,
      },
      {
        where: { id },
      },
    );

    return updatedTeacher;
  }

  /* ------------------- End Handle Update Teacher By Id  ------------------- */
}

module.exports = TeacherRepository;
