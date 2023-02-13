"use strict";
const { Model } = require("sequelize");
const post = require("./post");
module.exports = (sequelize, DataTypes) => {
  class candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      candidate.belongsToMany(post, { through: "listfavos" });
    }
  }
  candidate.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      pass: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "candidate",
    }
  );
  return candidate;
};
