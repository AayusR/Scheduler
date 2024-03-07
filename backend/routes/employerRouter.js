import express from "express";
import employerAuthController from "../controllers/companycontroller/employerAuthController.js";
import { authenticateJWT } from "../middleware/jwt.js";
import createjobController from "../controllers/companycontroller/createJobController.js";
import getUserController from "../controllers/companycontroller/getUserController.js"
const employerRouter = express.Router();

employerRouter.post("/signup", employerAuthController.signup);
employerRouter.post("/login", employerAuthController.login);
employerRouter.get("/dashboard", authenticateJWT("Company"), 
getUserController.getCreatedJobOffers
);
employerRouter.post(
  "/create-job",
  authenticateJWT("Company"),
  createjobController.createJob
);
export default employerRouter;
