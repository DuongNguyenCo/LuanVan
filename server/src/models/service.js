"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      Service.hasMany(models.Receipt, {});
      Service.hasMany(models.Business, { foreignKey: "id_service" });
    }
  }
  Service.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
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
