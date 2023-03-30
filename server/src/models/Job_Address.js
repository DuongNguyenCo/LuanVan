"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Job_Address extends Model {
    static associate(models) {}
  }
  Job_Address.init(
    {
      id_job: {
        type: DataTypes.INTEGER,
        references: { model: "Job", key: "id" },
      },
      id_address: {
        type: DataTypes.INTEGER,
        references: { model: "Address", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "Job_Address",
      name: {},
    }
  );
  return Job_Address;
};
