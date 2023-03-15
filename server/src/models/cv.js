"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cv extends Model {
    static associate(models) {
      Cv.belongsTo(models.Candidate, {
        foreignKey: "id_candidate",
      });
      Cv.belongsToMany(models.Post, {
        through: models.Cv_Post,
        foreignKey: "id_cv",
      });
    }
  }
  Cv.init(
    {
      id_candidate: DataTypes.INTEGER,
      file: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Cv",
    }
  );
  return Cv;
};
