const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("LVTN", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});
let connet = async () => {
  try {
    await sequelize.authenticate();
    console.log("ket noi thanh cong");
  } catch (e) {
    console.error("ket noi that bai", e);
  }
};
module.exports = connet;
