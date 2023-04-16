"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post_Service extends Model {
    static associate(models) {}
  }
  Post_Service.init(
    {
      id_service: {
        type: DataTypes.INTEGER,
        references: { model: "Service", key: "id" },
      },
      id_post: {
        type: DataTypes.INTEGER,
        references: { model: "Post", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "Post_Service",
      name: {},
    }
  );
  return Post_Service;
};
