"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cv extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cv.belongsTo(models.Candidate, {
        foreignKey: "idCandidate",
        targetKey: "id",
        as: "CandiCv",
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
