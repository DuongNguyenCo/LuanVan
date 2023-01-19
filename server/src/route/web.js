import express from "express";
import homeController from "../controllers/home";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.post("/post-candidate", homeController.postCandidate);
  return app.use("/", router);
};

export default initWebRoutes;
