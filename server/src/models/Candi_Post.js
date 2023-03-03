"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Candi_Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Candi_Post.init(
    {
      id_candidate: DataTypes.INTEGER,
      id_post: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Candi_Post",
    }
  );
  return Candi_Post;
};
