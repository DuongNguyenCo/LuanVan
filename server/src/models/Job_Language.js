"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Job_Language extends Model {
    static associate(models) {}
  }
  Job_Language.init(
    {
      id_job: {
        type: DataTypes.INTEGER,
        references: { model: Job, key: "id" },
      },
      id_language: {
        type: DataTypes.INTEGER,
        references: { model: Language, key: "id" },
      },
    },
    {
      sequelize,
      modelName: "Job_Language",
    }
  );
  return Job_Language;
};
