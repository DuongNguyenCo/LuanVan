import db from "../models/index.js";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log(data);
    return res.render("home.ejs", { data: JSON.stringify(data) });
  } catch (err) {
    console.log(err);
  }
};
let getAboutPage = (req, res) => {
  return res.render("about.ejs");
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
};
