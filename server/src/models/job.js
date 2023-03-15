"use strict";
const { Model } = require("sequelize");
const language = require("./Language");
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    static associate(models) {
      Job.belongsTo(models.Typejob, {
        foreignKey: "id_job_type",
      });
      Job.hasOne(models.Post, { foreignKey: "id_job" });
      Job.belongsToMany(models.Language, {
        through: models.Job_Language,
        foreignKey: "id_job",
      });
    }
  }
  Job.init(
    {
      id_job_type: DataTypes.INTEGER,
      name: DataTypes.STRING,
      salary: DataTypes.INTEGER,
      des: DataTypes.TEXT,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Job",
    }
  );
  return Job;
};
