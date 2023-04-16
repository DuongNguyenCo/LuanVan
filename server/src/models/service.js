"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      Service.hasMany(models.Receipt, {});
      Service.belongsToMany(models.Business, {
        through: models.Business_Service,
        foreignKey: "id_service",
      });
      Service.belongsToMany(models.Post, {
        through: models.Post_Service,
        foreignKey: "id_service",
      });
    }
  }
  Service.init(
    {
      name: DataTypes.STRING,
      type_service: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      new_post: DataTypes.BOOLEAN,
      hot_post: DataTypes.BOOLEAN,
      count_post: DataTypes.INTEGER,
      expire: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Service",
    }
  );
  return Service;
};
