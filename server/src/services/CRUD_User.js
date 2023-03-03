import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../models/index";
require("dotenv").config();

const saltRounds = 10;

let getByID = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Candidate.findOne({ where: { id: id }, raw: true });
      if (data) {
        const { pass, ...other } = data;
        resolve({
          errCode: 0,
          errMesssage: "findOne Successfully",
          other,
        });
      } else {
        resolve({
          errCode: -1,
          errMesssage: "User not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

let create = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Candidate.findOrCreate({
        where: { email: user.email },
        defaults: {
          first_name: user?.first_name,
          last_name: user?.last_name,
          pass: user?.pass && (await hashPassword(user.pass)),
        },
        raw: true,
      });
      if (data[1]) {
        const { pass, ...other } = data[0].dataValues;
        resolve({
          errCode: 0,
          errMesssage: "Create new user successfully",
          data: other,
        });
      } else {
        resolve({
          errCode: -1,
          errMesssage: "Email already exists",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

let login = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Candidate.findOne({
        where: { email: user.email },
        raw: true,
      });
      if (data) {
        let checkPass = bcrypt.compareSync(user.pass, data.pass);
        if (checkPass) {
          const { pass, ...other } = data;
          const token = jwt.sign({ user: other }, process.env.TOKEN_KEY, {
            expiresIn: "2h",
          });
          resolve({
            errCode: 0,
            errMessage: "Login Successfully",
            data: data,
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

let update = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Candidate.findOne({
        where: { email: user.email },
        raw: true,
      });
      if (data) {
        let dataNew = await db.Candidate.update(
          {
            first_name: user?.first_name,
            last_name: user?.last_name,
          },
          { where: { email: user.email }, raw: true }
        );
        if (dataNew[0] > 0) {
          resolve({
            errCode: 0,
            errMessage: "Update user Successfully",
          });
        } else {
          resolve({
            errCode: -1,
            errMessage: "Update user failed",
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

let hashPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hash = await bcrypt.hash(password, saltRounds);
      resolve(hash);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getByID,
  create,
  login,
  update,
  hashPassword,
};
