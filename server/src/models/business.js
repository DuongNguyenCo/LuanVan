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
      Business.hasMany(models.Address, {
        foreignKey: "id_business",
      });
      Business.belongsToMany(models.Candidate, {
        through: models.Candi_Busi,
        foreignKey: "id_business",
      });
      Business.belongsTo(models.Service, { foreignKey: "id_service" });
    }
  }
  Business.init(
    {
      id_service: DataTypes.INTEGER,
      name: DataTypes.STRING,
      phone: DataTypes.STRING(10),
      email: DataTypes.STRING,
      des: DataTypes.TEXT,
      benefit: DataTypes.TEXT,
      url: DataTypes.TEXT,
      street: DataTypes.STRING,
      ward: DataTypes.STRING,
      district: DataTypes.STRING,
      city: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Business",
    }
  );
  return Business;
};
