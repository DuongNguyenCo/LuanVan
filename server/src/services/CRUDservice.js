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
      let all = await db.candidate.findAll({ raw: true });
      resolve(all);
    } catch (error) {
      reject(error);
    }
  });
};
let getAllCandidate = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.candidate.findAll({ raw: true });
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

let getCandidateById = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.candidate.findOne({ where: { id: id }, raw: true });
      if (data) resolve(data);
      else resolve(null);
    } catch (error) {
      reject(error);
    }
  });
};

let updateCandidate = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let candidate = await db.candidate.findOne({
        where: { id: data.id },
      });
      if (candidate) {
        candidate.name = data.name;
        await candidate.save();
        let all = await db.candidate.findAll({ raw: true });
        resolve(all);
      } else {
        resolve(null);
      }
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
  createNewCandidate,
  getAllCandidate,
  getCandidateById,
  updateCandidate,
};
