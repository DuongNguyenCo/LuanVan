"use strict";
const { Model } = require("sequelize");
const language = require("./Language");
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job.init(
    {
      id_job_type: DataTypes.INTEGER,
      name: DataTypes.STRING,
      salary: DataTypes.INTEGER,
      des: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Job",
    }
  );
  return Job;
};
