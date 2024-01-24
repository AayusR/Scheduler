import express from 'express'
import employerAuthController from "../controllers/employerAuthController.js";
const employerRouter = express.Router()

employerRouter.post('/signup', employerAuthController.signup);
employerRouter.post('/login', employerAuthController.login);
employerRouter.get('/dashboard', (req, res)=>{
    res.send("User profile")
})


export default employerRouter