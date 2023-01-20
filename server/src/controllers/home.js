import CRUDService from "../services/CRUDservice";

let getHomePage = (req, res) => {
  return res.render("post-candidate.ejs");
};
let getCandidate = async (req, res) => {
  let data = await CRUDService.getAllCandidate();
  return res.render("get-candidate.ejs", {
    data: data,
  });
};
let postCandidate = async (req, res) => {
  let allUser = await CRUDService.createNewCandidate(req.body);
  return res.render("get-candidate.ejs", {
    data: allUser,
  });
};

let getEditCandidate = async (req, res) => {
  let candidate = await CRUDService.getCandidateById(req.query.id);
  return res.render("edit-candidate.ejs", { data: candidate });
};

let putCandidate = async (req, res) => {
  let allUser = await CRUDService.updateCandidate(req.body);
  return res.render("get-candidate.ejs", {
    data: allUser,
  });
};

module.exports = {
  getHomePage,
  postCandidate,
  getCandidate,
  getEditCandidate,
  putCandidate,
};
