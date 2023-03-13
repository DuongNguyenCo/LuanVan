"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cv_Post extends Model {
    static associate(models) {}
  }
  Cv_Post.init(
    {
      id_post: {
        type: DataTypes.INTEGER,
        references: { model: "Post", key: "id" },
      },
      id_cv: {
        type: DataTypes.INTEGER,
        references: { model: "Cv", key: "id" },
      },
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cv_Post",
    }
  );
  return Cv_Post;
};
