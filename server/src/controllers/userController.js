import crudUser from "../services/CRUD_User";

let getByID = async (req, res) => {
  let data = await crudUser.getByID(req.params.id);
  if (data.errCode === 0) {
    res.status(200).json(data);
  } else {
    res.status(404).json(data);
  }
};

let create = async (req, res) => {
  let data = await crudUser.create(req.body);
  res.status(200).json(data);
};

let update = async (req, res) => {
  let data = await crudUser.update(req.body);
  console.log(data);
};

let login = async (req, res) => {
  let data = await crudUser.login(req.body);
  res.status(200).json(data);
};

module.exports = {
  getByID,
  login,
  create,
  update,
};
