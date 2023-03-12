import crudPost from "../services/CRUD_Post";

let getAll = async (req, res) => {
  let data = await crudPost.getAll();
  res.status(200).json(data);
};

module.exports = {
  getAll,
};
