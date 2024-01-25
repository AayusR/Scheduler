import express from "express";
import employeeAuthController from "../controllers/employeeAuthController.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
const employeeRouter = express.Router();

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET_E, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
};

employeeRouter.post("/signup", employeeAuthController.signup);
employeeRouter.post("/login", employeeAuthController.login);
employeeRouter.get("/profile", authenticateJWT, (req, res) => {
  res.send("User profile");
});

export default employeeRouter;
