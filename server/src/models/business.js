"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Business.hasMany(models.Post, {
        foreignKey: "idBusiness",
        as: "BusiPost",
      });
      Business.hasMany(models.Receipt, {
        foreignKey: "idBusiness",
        as: "BusiReceipt",
      });
    }
  }
  Business.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING(10),
      email: DataTypes.STRING,
      des: DataTypes.TEXT,
      pass: DataTypes.STRING,
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
