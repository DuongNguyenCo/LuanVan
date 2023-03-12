import express from "express";
import bodyParser from "body-parser";
import initWebRoutes from "./route/web.js";
import connet from "./config/connectDB.js";
import cors from "cors";
require("dotenv").config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);
//config
initWebRoutes(app);

connet();

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("running..." + port);
});
