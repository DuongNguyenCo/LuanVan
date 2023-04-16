"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Email_Tamplates extends Model {
    static associate(models) {}
  }
  Email_Tamplates.init(
    {
      id_business: DataTypes.STRING,
      name: DataTypes.STRING,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Email_Tamplates",
    }
  );
  return Email_Tamplates;
};
