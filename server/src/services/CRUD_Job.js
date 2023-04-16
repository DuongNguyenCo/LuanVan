import { Op } from "sequelize";
import db from "../models/index";

let create = (job) => {
  return new Promise(async (resolve, reject) => {
    try {
      const configAddress = job.location.map((a) => {
        const newAddress = a.id;
        return newAddress;
      });
      const configLanguage = job.idLanguage.map((a) => {
        const newAddress = a.id;
        return newAddress;
      });
      const address = await db.Address.findAll({
        where: { id: configAddress || "" },
        raw: true,
      });
      const language = await db.Language.findAll({
        where: { id: configLanguage || "" },
        raw: true,
      });
      const data = await db.Job.findOrCreate({
        where: { name: job.name },
        defaults: {
          id_job_type: job.idTypeJob,
          salary: job.salary,
          des: job.des,
          quantity: job.quantity,
          request: job.request,
        },
        raw: true,
      });
      if (data[1]) {
        language &&
          language.map(async (a) => {
            await db.Job_Language.create({
              id_job: data[0].dataValues.id,
              id_language: a.id,
            });
          });
        address &&
          address.map(async (a) => {
            await db.Job_Address.create({
              id_job: data[0].dataValues.id,
              id_address: a.id,
            });
          });
      }
      if (data[1]) {
        if (language.length > 0 && language.length > 0) {
          resolve({
            errCode: 0,
            errMessage: "Create successfully",
            data: data[0].dataValues,
          });
        } else {
          resolve({ errCode: 1, errMessage: "lack of information" });
        }
      } else {
        resolve({ errCode: -1, errMessage: "Job already exists" });
      }
    } catch (err) {
      reject(err);
    }
  });
};

let getAll = (query) => {
  return new Promise(async (resolve, reject) => {
    try {
      const page = query.page * 1 || 1 * 1;
      const limit = query.limit * 1 || 9 * 1;
      let data = await db.Post.findAll({
        attributes: ["id", "id_business", "id_job", "expire", "createdAt"],
        include: [
          { model: db.Business, attributes: ["name", "url", "id"] },
          {
            model: db.Job,
            attributes: ["id", "name", "salary"],
            include: [
              { model: db.Language, attributes: ["name"] },
              { model: db.Address, attributes: ["city"] },
            ],
          },
        ],
        where: { expire: { [Op.gte]: new Date() } },
        order: [["expire", "DESC"]],
        limit: limit,
        offset: (page - 1) * limit,
        nest: true,
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
let getById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Job.findOne({
        attributes: ["salary", "des", "request", "quantity", "name"],
        include: [
          { model: db.Language, attributes: ["name"] },
          {
            model: db.Post,
            attributes: ["createdAt"],
            include: [
              {
                model: db.Business,
                attributes: ["name", "url", "id", "benefit"],
              },
            ],
          },
          {
            model: db.Address,
            attributes: ["street", "ward", "district", "city"],
          },
        ],

        where: { id: id },
        nest: true,
      });
      resolve({ errCode: 0, errMessage: "Find all data", data });
    } catch (err) {
      reject(err);
    }
  });
};

let getByBusiness = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("id: ", id);
      const data = await db.Post.findAll({
        attributes: ["expire", "id"],
        include: [
          {
            model: db.Job,
            attributes: ["name"],
            include: [{ model: db.Address }],
          },
          { model: db.Service },
        ],
        nest: true,
      });
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { create, getAll, getById, getByBusiness };
