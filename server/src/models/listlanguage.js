"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class listlanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  listlanguage.init(
    {
      idjob: DataTypes.INTEGER,
      idlanguage: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "listlanguage",
    }
  );
  return listlanguage;
};