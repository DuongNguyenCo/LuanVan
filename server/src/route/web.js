import express from "express";
import homeController from "../controllers/home";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/get-candidate", homeController.getCandidate);
  router.post("/post-candidate", homeController.postCandidate);
  router.get("/edit-candidate", homeController.getEditCandidate);
  router.post("/put-candidate", homeController.putCandidate);
  return app.use("/", router);
};

export default initWebRoutes;
