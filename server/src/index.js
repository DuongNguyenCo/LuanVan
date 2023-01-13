import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine.js";
import initWebRoutes from "./route/web.js";
import connet from "./config/connectDB.js";
// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
require("dotenv").config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//config
viewEngine(app);
initWebRoutes(app);

connet();

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("running..." + port);
});
