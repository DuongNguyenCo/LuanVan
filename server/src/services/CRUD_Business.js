import db from "../models/index";
import { hashPassword } from "./CRUD_User";

let getAll = (page = 1) => {
  return new Promise(async (resolve, reject) => {
    try {
      page = page * 1;
      const limit = 4;
      let data = await db.Business.findAll({
        attributes: [
          "id",
          "name",
          "email",
          "phone",
          "des",
          "url",
          "street",
          "ward",
          "district",
          "city",
        ],
        limit: limit,
        offset: (page - 1) * limit,
        raw: true,
      });
      resolve({
        errCode: 0,
        errMessage: "Find all data",
        data,
      });
    } catch (err) {
      reject(err);
    }
  });
};
let getByID = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Business.findOne({ where: { id: id }, raw: true });
      if (data) {
        const { pass, ...other } = data;
        resolve({
          errCode: 0,
          errMessage: "findOne Successfully",
          data: other,
        });
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

let create = (busienss) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Business.findOrCreate({
        where: { email: busienss?.email },
        defaults: {
          name: busienss?.name,
          pass: busienss?.pass && (await hashPassword(busienss.pass)),
        },
      });
      if (data[1]) {
        resolve({
          errCode: 0,
          errMessage: "Create successfully",
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: "Email already exists",
        });
      }
    } catch (err) {
      reject(err);
    }
  });
};

let update = (busienss) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Business.findOne({
        where: { email: busienss.email },
      });
      if (data) {
        let dataNew = await db.Business.update(
          {
            name: busienss?.name,
            phone: busienss?.phone,
            des: busienss?.des,
            street: busienss?.street,
            ward: busienss?.ward,
            district: busienss?.district,
            city: busienss?.city,
          },
          { where: { email: busienss?.email }, raw: true }
        );
        if (dataNew[0] > 0) {
          resolve({ errCode: 0, errMessage: "update successfully" });
        } else {
          resolve({ errCode: 1, errMessage: "update failed" });
        }
      } else {
        resolve({ errCode: -1, errMessage: "Business not found" });
      }
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  getAll,
  getByID,
  create,
  update,
};
