import express from "express";
import employerAuthController from "../controllers/employerAuthController.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
const employerRouter = express.Router();

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET_C, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
};

employerRouter.post("/signup", employerAuthController.signup);
employerRouter.post("/login", employerAuthController.login);
employerRouter.get("/dashboard", authenticateJWT, (req, res) => {
  res.send("User dashboard");
});

export default employerRouter;
