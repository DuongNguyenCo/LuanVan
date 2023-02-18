"use strict";
const { Model } = require("sequelize");
const post = require("./Post");
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Candidate.hasMany(models.Cv, {
        foreignKey: "idCandidate",
        as: "CandiCv",
      });
      Candidate.belongsToMany(models.Post, {
        through: models.Candi_Post,
        foreignKey: "idCandidate",
        as: "favorite",
      });
    }
  }
  Candidate.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      pass: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Candidate",
    }
  );
  return Candidate;
};
