import { Op } from "sequelize";
import db from "../models/index";

let getAll = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.Address.findAll({
        where: { id_business: id },
        raw: true,
      });
      resolve({
        errCode: 0,
        errMessage: "findAll successfully",
        data,
      });
    } catch (err) {
      reject(err);
    }
  });
};

let create = (address) => {
  return new Promise(async (resolve, reject) => {
    try {
      const business = await db.Business.findOne({
        where: { id: address.idBusiness },
      });
      if (business) {
        const data = await db.Address.findOrCreate({
          raw: true,
          where: {
            [Op.and]: [
              { id_business: address.idBusiness },
              { street: address.street },
              { ward: address.ward },
              { district: address.district },
              { city: address.city },
            ],
          },
          defaults: {
            id_business: address.idBusiness,
            street: address.street,
            ward: address.ward,
            district: address.district,
            city: address.city,
          },
        });
        if (data[1]) {
          resolve({
            errCode: 0,
            errMessage: "create successfully",
          });
        } else {
          resolve({
            errCode: 1,
            errMessage: "address already exists",
          });
        }
      } else {
        resolve({
          errCode: -1,
          errMessage: "Business not found",
        });
      }
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { create, getAll };
