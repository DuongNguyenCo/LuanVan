import db from "../models/index";

let getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Post.findAll({
        include: [
          {
            model: db.Job,
            include: [{ model: db.Typejob }],
          },
        ],
        raw: true,
        nest: true,
      });
      resolve({ errCode: 1, errMessage: "findAll successfully", data });
    } catch (err) {
      reject(err);
    }
  });
};

let create = (post) => {
  return new Promise(async (resolve, reject) => {
    try {
      const time = new Date();
      const date = new Date(time.getTime() + 14 * 24 * 60 * 60 * 1000);
      let data = await db.Post.findOrCreate({
        where: {
          id_job: post.idJob,
          id_business: post.idBusiness,
          name: post.name,
        },
        defaults: {
          expire: date,
        },
      });
      if (data[1]) {
        resolve({ errCode: 0, errMessage: "create post successfully" });
      } else {
        resolve({ errCode: 1, errMessage: "create post failed" });
      }
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  getAll,
  create,
};
