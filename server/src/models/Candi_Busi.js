"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Candi_Busi extends Model {
    static associate(models) {}
  }
  Candi_Busi.init(
    {
      id_candidate: {
        type: DataTypes.INTEGER,
        references: { model: "Candidate", key: "id" },
      },
      id_business: {
        type: DataTypes.INTEGER,
        references: { model: "Business", key: "id" },
      },
      star: DataTypes.FLOAT,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Candi_Busi",
    }
  );
  return Candi_Busi;
};
