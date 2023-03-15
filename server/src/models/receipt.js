"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Receipt extends Model {
    static associate(models) {
      Receipt.belongsTo(models.Business, {
        foreignKey: "id_business",
      });
      Receipt.belongsTo(models.Service, {
        foreignKey: "id_service",
      });
      Receipt.belongsTo(models.Discount, {
        foreignKey: "id_discount",
      });
    }
  }
  Receipt.init(
    {
      id_discount: DataTypes.INTEGER,
      id_service: DataTypes.INTEGER,
      id_business: DataTypes.INTEGER,
      name: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Receipt",
    }
  );
  return Receipt;
};
