import db from "../models/index";

let getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Typejob.findAll({
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

module.exports = { getAll };
