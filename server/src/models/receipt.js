"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Receipt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Receipt.belongsTo(models.Business, {
        foreignKey: "idBusiness",
        targetKey: "id",
        as: "BusiReceipt",
      });
    }
  }
  Receipt.init(
    {
      name: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      id_discount: DataTypes.INTEGER,
      id_type_service: DataTypes.INTEGER,
      id_business: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Receipt",
    }
  );
  return Receipt;
};
