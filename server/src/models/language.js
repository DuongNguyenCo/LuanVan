"use strict";
const { Model } = require("sequelize");
const job = require("./job");
module.exports = (sequelize, DataTypes) => {
  class language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      language.belongsToMany(job, { through: "listlanguages" });
    }
  }
  language.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "language",
    }
  );
  return language;
};
