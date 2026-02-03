"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TeacherClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TeacherClass.belongsTo(models.Class, {
        foreignKey: "classId",
      });

      TeacherClass.belongsTo(models.Teacher, {
        foreignKey: "teacherId",
      });
    }
  }
  TeacherClass.init(
    {
      teacherId: DataTypes.INTEGER,
      classId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "TeacherClass",
      tableName: "teacher_classes",
    },
  );
  return TeacherClass;
};
