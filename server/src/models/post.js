"use strict";
const { Model } = require("sequelize");
const candidate = require("./candidate");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      post.belongsToMany(candidate, { through: "listfavos" });
    }
  }
  post.init(
    {
      name: DataTypes.STRING,
      idbusiness: DataTypes.INTEGER,
      idjob: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "post",
    }
  );
  return post;
};
