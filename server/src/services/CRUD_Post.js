import db from "../models/index";

let getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Post.findAll({ raw: true });
      console.log(data);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  getAll,
};
