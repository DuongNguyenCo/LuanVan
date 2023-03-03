"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Service.hasMany(models.Receipt, {
      //   foreignKey: "id_type_service",
      //   as: "ServiceReceipt",
      // });
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
