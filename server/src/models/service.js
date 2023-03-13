"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      Service.hasMany(models.Receipt, {
        as: "receipt",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Service.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      count_post: DataTypes.INTEGER,
      expire: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Service",
    }
  );
  return Service;
};
