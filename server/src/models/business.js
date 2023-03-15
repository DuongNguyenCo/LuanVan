"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    static associate(models) {
      Business.hasMany(models.Post, {
        foreignKey: "id_business",
      });
      Business.hasMany(models.Receipt, {
        as: "receipt",
      });
      Business.belongsToMany(models.Candidate, {
        through: models.Candi_Busi,
        foreignKey: "id_business",
      });
    }
  }
  Business.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING(10),
      email: DataTypes.STRING,
      des: DataTypes.TEXT,
      password: DataTypes.STRING,
      url: DataTypes.TEXT,
      street: DataTypes.STRING,
      ward: DataTypes.STRING,
      district: DataTypes.STRING,
      city: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Business",
    }
  );
  return Business;
};
