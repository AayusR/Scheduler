import express from "express";
import cors from "./middleware/cors.js";
import "dotenv/config";
import connectDB from "./connection.js";
import defaultRouter from "./routes/defaultRoute.js";
import employeeRouter from "./routes/employeeRouter.js";
import employerRouter from "./routes/employerRouter.js";
const app = express();
const port = 3000;

await connectDB();
app.use(cors);
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    const userRole = req.headers['user-role'];

    if (userRole === 'employee') {
        app.use('/', employeeRouter);
    } else if (userRole === 'employer') {
        app.use('/', employerRouter); 
    } else {

app.use('/', defaultRouter)
    }

    next();
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
