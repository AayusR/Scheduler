import express from "express";
import employeeAuthController from "../controllers/applicantcontroller/employeeAuthController.js";

import { authenticateJWT } from "../middleware/jwt.js";
import getJobOffersController from "../controllers/applicantcontroller/getJobOffersController.js";
const employeeRouter = express.Router();

employeeRouter.post("/signup", employeeAuthController.signup);
employeeRouter.post("/login", employeeAuthController.login);
employeeRouter.get("/profile", authenticateJWT("Employee"), (req, res) => {
  res.send("User profile");
});
employeeRouter.get(
  "/joboffers",
  authenticateJWT("Employee"),
  getJobOffersController.getJobOffers
);
employeeRouter.get(
  "/joboffers/byid",
  authenticateJWT("Employee"),
  getJobOffersController.getJobById
);
employeeRouter.post(
"/joboffers/byid/submit-requirements",
  authenticateJWT("Employee"),
  getJobOffersController.postForm,
);
employeeRouter.post(
  "/joboffers/byid/submit-requirements/resume",
    authenticateJWT("Employee"),
    getJobOffersController.postResume,
  );

  employeeRouter.get(
    "/upcomminginterview",
      authenticateJWT("Employee"),
      getJobOffersController.getUpcommingInterviews,
    );



export default employeeRouter;
