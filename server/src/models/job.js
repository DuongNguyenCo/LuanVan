"use strict";
const { Model } = require("sequelize");
const language = require("./Language");
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    static associate(models) {
      Job.belongsTo(models.Typejob, {
        foreignKey: "id_job_type",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      Job.belongsTo(models.Post, { foreignKey: "id_job", as: "post" });
      Job.belongsToMany(models.Language, {
        through: models.Job_Language,
        as: "listLanguage",
        foreignKey: "id_job",
        onDelete: "cascade",
        onUpdate: "cascade",
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
