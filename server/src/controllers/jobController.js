import crudJob from "../services/CRUD_Job";

let create = async (req, res) => {
  const data = await crudJob.create(req.body);
  res.status(200).json(data);
};

module.exports = { create };
