import db from "../models/index";

let create = (job) => {
  return new Promise(async (resolve, reject) => {
    try {
      const language = await db.Language.findAll({
        where: { id: job.idLanguage || "" },
        raw: true,
      });
      const data = await db.Job.create({
        id_job_type: job.idTypeJob,
        name: job.name,
        salary: job.salary,
        des: job.des,
        quantity: job.quantity,
      });
      language &&
        language.map(async (a) => {
          await db.Job_Language.create({
            id_job: data.id,
            id_language: a.id,
          });
        });
      if (language.length > 0 && data) {
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
