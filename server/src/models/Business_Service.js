"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Business_Service extends Model {
    static associate(models) {}
  }
  Business_Service.init(
    {
      id_service: {
        type: DataTypes.INTEGER,
        references: { model: "Service", key: "id" },
      },
      id_business: {
        type: DataTypes.INTEGER,
        references: { model: "Business", key: "id" },
      },
      expire: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "Business_Service",
      name: {},
    }
  );
  return Business_Service;
};
