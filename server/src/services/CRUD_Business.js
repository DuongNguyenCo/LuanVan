import db from "../models/index";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { hashPassword } from "./CRUD_User";

let login = (business) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Business.findOne({
        where: { email: business.email },
        raw: true,
      });
      if (data) {
        let checkPass = bcrypt.compareSync(business.password, data.password);
        if (checkPass) {
          const { password, ...other } = data;
          const token = jwt.sign({ business: other }, process.env.TOKEN_KEY, {
            expiresIn: "2h",
          });
          resolve({
            errCode: 0,
            errMessage: "Login Successfully",
            data: other,
            token: token,
          });
        } else {
          resolve({
            errCode: 1,
            errMessage: "incorrect password",
          });
        }
      } else {
        resolve({
          errCode: -1,
          errMessage: "User not found",
        });
      }
    } catch (err) {
      reject(err);
    }
  });
};

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
      let data = await db.Business.findOne({
        include: [{ model: db.Service }],
        where: { id: id },
        raw: true,
        nest: true,
      });
      if (data) {
        const { password, ...other } = data;
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
          id_service: 1,
          name: busienss?.name,
          password: busienss?.pass && (await hashPassword(busienss.pass)),
        },
      });
      if (data[1]) {
        const { password, ...other } = data[0].dataValues;
        resolve({
          errCode: 0,
          errMessage: "Create successfully",
          data: other,
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
  login,
};
