"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class listfavo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  listfavo.init(
    {
      idcandidate: DataTypes.INTEGER,
      idpost: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "listfavo",
    }
  );
  return listfavo;
};
