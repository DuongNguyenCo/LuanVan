"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Job_Language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Job_Language.init(
    {
      id_job: DataTypes.INTEGER,
      id_language: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Job_Language",
    }
  );
  return Job_Language;
};
