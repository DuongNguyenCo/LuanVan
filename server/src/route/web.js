import express from "express";
// import homeController from "../controllers/home";
import userController from "../controllers/userController";
import businessController from "../controllers/businessControllser";
import postController from "../controllers/postController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    res.send("backend");
  });
  //user
  router.get("/api/user/get-by-id/:id", userController.getByID);
  router.post("/api/user/login", userController.login);
  router.post("/api/user/create", userController.create);
  router.put("/api/user/update/", userController.update);
  // router.delete("/api/user/delete/:id", userController.remove);

  //business
  router.get("/api/business/get-all", businessController.getAll);
  router.get("/api/business/get-by-id/:id", businessController.getByID);
  router.post("/api/business/create", businessController.create);
  router.put("/api/business/update", businessController.update);

  //post
  router.get("/api/post/get-all", postController.getAll);
  return app.use("/", router);
};

export default initWebRoutes;
