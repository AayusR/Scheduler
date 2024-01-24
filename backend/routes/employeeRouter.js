import express from "express";
import employeeAuthController from "../controllers/employeeAuthController.js";
const employeeRouter = express.Router();


employeeRouter.post('/signup', employeeAuthController.signup);
employeeRouter.post('/login', employeeAuthController.login);
employeeRouter.get("/profile", (req, res) => {
  res.send("User profile");
});

export default employeeRouter;
