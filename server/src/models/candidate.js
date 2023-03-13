"use strict";
const { Model } = require("sequelize");
const post = require("./Post");
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    static associate(models) {
      Candidate.hasMany(models.Cv, {
        as: "Cv",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      Candidate.belongsToMany(models.Business, {
        through: models.Candi_Busi,
        as: "review",
        foreignKey: "id_candidate",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      Candidate.belongsToMany(models.Post, {
        through: models.Candi_Post,
        as: "favorite",
        foreignKey: "id_candidate",
        onDelete: "cascade",
        onUpdate: "cascade",
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
