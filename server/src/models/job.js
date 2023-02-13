"use strict";
const { Model } = require("sequelize");
const language = require("./language");
module.exports = (sequelize, DataTypes) => {
  class job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      job.belongsToMany(language, { through: "listlanguages" });
    }
  }
  job.init(
    {
      name: DataTypes.STRING,
      salary: DataTypes.FLOAT,
      des: DataTypes.TEXT,
      idtypejob: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "job",
    }
  );
  return job;
};
