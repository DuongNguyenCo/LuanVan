"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      Address.belongsTo(models.Business, {
        foreignKey: "id_business",
      });
      Address.belongsToMany(models.Job, {
        through: models.Job_Address,
        foreignKey: "id_address",
      });
    }
  }
  Address.init(
    {
      id_business: DataTypes.INTEGER,
      street: DataTypes.STRING,
      ward: DataTypes.STRING,
      district: DataTypes.STRING,
      city: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};
