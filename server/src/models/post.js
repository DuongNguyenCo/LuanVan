"use strict";
const { Model } = require("sequelize");
const candidate = require("./Candidate");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.Business, {
        foreignKey: "id_business",
      });
      Post.belongsTo(models.Job, { foreignKey: "id_job" });
      Post.belongsToMany(models.Candidate, {
        through: models.Candi_Post,
        foreignKey: "id_post",
      });
      Post.belongsToMany(models.Cv, {
        through: models.Cv_Post,
        foreignKey: "id_post",
      });
    }
  }
  Post.init(
    {
      id_business: DataTypes.INTEGER,
      id_job: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
