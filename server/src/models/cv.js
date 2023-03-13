"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cv extends Model {
    static associate(models) {
      Cv.belongsTo(models.Candidate, {
        foreignKey: "id_candidate",
        as: "candidate",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      Cv.belongsToMany(models.Post, {
        through: models.Cv_Post,
        as: "apply",
        foreignKey: "id_cv",
        onDelete: "cascade",
        onUpdate: "cascade",
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
