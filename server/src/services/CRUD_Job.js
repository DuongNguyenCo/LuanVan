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
      const data = await db.Job.create({
        id_job_type: job.idTypeJob,
        name: job.name,
        salary: job.salary,
        des: job.des,
        quantity: job.quantity,
        request: job.request,
      });
      language &&
        language.map(async (a) => {
          await db.Job_Language.create({
            id_job: data.id,
            id_language: a.id,
          });
        });
      address &&
        address.map(async (a) => {
          await db.Job_Address.create({
            id_job: data.id,
            id_address: a.id,
          });
        });
      if (language.length > 0 && language.length > 0 && data) {
        resolve({ errCode: 0, errMessage: "Create successfully" });
      } else {
        resolve({ errCode: 1, errMessage: "lack of information" });
      }
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { create };
