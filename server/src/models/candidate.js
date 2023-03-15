"use strict";
const { Model } = require("sequelize");
const post = require("./Post");
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    static associate(models) {
      Candidate.hasMany(models.Cv, {});
      Candidate.belongsToMany(models.Business, {
        through: models.Candi_Busi,
        foreignKey: "id_candidate",
      });
      Candidate.belongsToMany(models.Post, {
        through: models.Candi_Post,
        foreignKey: "id_candidate",
      });
    }
  }
  Candidate.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Candidate",
    }
  );
  return Candidate;
};
