import db from "../models/index.js";
import CRUDService from "../services/CRUDservice";

let getHomePage = async (req, res) => {
  return res.render("home.ejs");
};

let postCandidate = async (req, res) => {
  await CRUDService.createNewCandidate(req.body);
  return res.send("haha");
};

module.exports = {
  getHomePage: getHomePage,
  postCandidate: postCandidate,
};
