import express from "express";
import employeeRouter from "./employeeRouter.js";
import employerRouter from "./employerRouter.js";
const defaultRouter = express.Router();
defaultRouter.get('/', (req, res)=>{
    res.send("Running")
})
defaultRouter.use("/employee", employeeRouter);
defaultRouter.use("/employer", employerRouter);


export default defaultRouter