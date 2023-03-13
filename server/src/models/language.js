"use strict";
const { Model } = require("sequelize");
const job = require("./Job");
module.exports = (sequelize, DataTypes) => {
  class Language extends Model {
    static associate(models) {
      Language.belongsToMany(models.Job, {
        through: models.Job_Language,
        as: "listLanguage",
        foreignKey: "id_language",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Language.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Language",
    }
  );
  return Language;
};
