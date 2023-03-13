"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Typejob extends Model {
    static associate(models) {
      Typejob.hasMany(models.Job, {
        foreignKey: "id_job_type",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Typejob.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Typejob",
    }
  );
  return Typejob;
};
