import express from "express";
import { getAboutPage, getHomePage } from "../controllers/home.js";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", getHomePage);
  router.get("/about", getAboutPage);
  return app.use("/", router);
};

export default initWebRoutes;
