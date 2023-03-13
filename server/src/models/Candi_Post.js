"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Candi_Post extends Model {
    static associate(models) {}
  }
  Candi_Post.init(
    {
      id_candidate: {
        type: DataTypes.INTEGER,
        references: { model: "Candidate", key: "id " },
      },
      id_post: {
        type: DataTypes.INTEGER,
        references: { model: "Post", key: "id " },
      },
    },
    {
      sequelize,
      modelName: "Candi_Post",
    }
  );
  return Candi_Post;
};
