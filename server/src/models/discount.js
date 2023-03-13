"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
    static associate(models) {
      Discount.hasMany(models.Receipt, {
        as: "receipt",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Discount.init(
    {
      name: DataTypes.STRING,
      code: DataTypes.STRING(6),
    },
    {
      sequelize,
      modelName: "Discount",
    }
  );
  return Discount;
};
