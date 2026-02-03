"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsTo(models.User, {
        foreignKey: "userId",
      });

      Student.belongsTo(models.Class, {
        foreignKey: "classId",
      });
    }
  }
  Student.init(
    {
      userId: DataTypes.INTEGER,
      classId: DataTypes.INTEGER,
      fullName: DataTypes.STRING,
      studentNumber: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Student",
    },
  );
  return Student;
};
