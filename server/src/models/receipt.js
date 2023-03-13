"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Receipt extends Model {
    static associate(models) {
      Receipt.belongsTo(models.Business, {
        foreignKey: "id_business",
        as: "business",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      Receipt.belongsTo(models.Service, {
        foreignKey: "id_service",
        as: "service",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      Receipt.belongsTo(models.Discount, {
        foreignKey: "id_discount",
        as: "discount",
        onDelete: "cascade",
        onUpdate: "cascade",
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
