"use strict";
const { Model } = require("sequelize");
const candidate = require("./Candidate");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.Business, {
        foreignKey: "id_business",
      });
      Post.belongsTo(models.Job, {
        foreignKey: "id_job",
      });
      Post.belongsToMany(models.Candidate, {
        through: models.Candi_Post,
        foreignKey: "id_post",
      });
      Post.belongsToMany(models.Cv, {
        through: models.Cv_Post,
        foreignKey: "id_post",
      });
      Post.belongsToMany(models.Service, {
        through: models.Post_Service,
        foreignKey: "id_post",
      });
    }
  }
  Post.init(
    {
      id_business: DataTypes.INTEGER,
      id_job: DataTypes.INTEGER,
      expire: DataTypes.DATE,
      step1: DataTypes.INTEGER,
      step2: DataTypes.INTEGER,
      step3: DataTypes.INTEGER,
      step4: DataTypes.INTEGER,
      step5: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
