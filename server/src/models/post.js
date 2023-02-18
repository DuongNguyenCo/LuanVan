"use strict";
const { Model } = require("sequelize");
const candidate = require("./Candidate");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.Business, {
        foreignKey: "idBusiness",
        targetKey: "id",
        as: "BusiPost",
      });
      Post.belongsToMany(models.Candidate, {
        through: models.Candi_Post,
        foreignKey: "idPost",
        as: "favorite",
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
