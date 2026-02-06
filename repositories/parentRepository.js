const { Parent, Student, sequelize } = require("../models");

class ParentRepository {
  /* ------------------- Handle Create Parent  ------------------- */

  static async handleCreateParent({ userId, fullName, occupation }) {
    const parentCreated = await Parent.create({
      userId,
      fullName,
      occupation,
    });

    return parentCreated;
  }

  /* ------------------- End Handle Create Parent  ------------------- */

  /* ------------------- Handle Get All Parent  ------------------- */

  static async handleGetAllParent() {
    const query = {
      where: {},
      attributes: ["id", "fullName", "occupation"],
    };

    const getParent = await Parent.findAll(query);

    return getParent;
  }

  /* ------------------- End Handle Get All Parent  ------------------- */

  /* ------------------- Handle Get All Parent With Student ------------------- */

  static async handleGetAllParentStudent() {
    const query = {
      where: {},
      attributes: ["id", "fullName", "occupation"],
      include: [
        {
          model: Student,
          as: "students",
          attributes: ["fullName", "studentNumber"],
        },
      ],
    };

    const getParent = await Parent.findAll(query);

    return getParent;
  }

  /* ------------------- End Handle Get All Parent With Student ------------------- */

  /* ------------------- Handle Get Parent By Id  ------------------- */

  static async handleGetParentById({ id }) {
    const query = {
      where: { id },
      attributes: ["id", "fullName", "occupation"],
    };

    const getParentById = Parent.findOne(query);

    return getParentById;
  }

  /* ------------------- End Handle Get Parent By Id  ------------------- */

  /* ------------------- Handle Delete Parent By Id  ------------------- */

  static async handleDeleteParentById({ id }) {
    return await sequelize.transaction(async (t) => {
      await Student.update(
        { parentId: null },
        {
          where: { parentId: id },
          transaction: t,
        },
      );

      const deletedParent = await Parent.destroy({
        where: { id },
        transaction: t,
      });

      return deletedParent;
    });
  }

  /* ------------------- End Handle Delete Parent By Id  ------------------- */

  /* ------------------- Handle Update Parent By Id  ------------------- */

  static async handleUpdateParentById({ id, fullName, occupation }) {
    const updatedParent = await Parent.update(
      {
        fullName,
        occupation,
      },
      {
        where: { id },
      },
    );

    return updatedParent;
  }

  /* ------------------- End Handle Update Parent By Id  ------------------- */
}

module.exports = ParentRepository;
