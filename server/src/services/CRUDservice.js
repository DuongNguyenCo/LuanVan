import bcrypt from "bcrypt";
import db from "../models/index";
const saltRounds = 10;

let createNewCandidate = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPass = await hashPassword(data.password);
      await db.candidate.create({
        name: data.name,
        email: data.email,
        pass: hashPass,
      });
      resolve("thanh cong");
    } catch (error) {
      reject(error);
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
  createNewCandidate: createNewCandidate,
};
