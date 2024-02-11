import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect("mongodb://admin:admin@localhost:27017/");
  } catch (error) {
    console.error(`Error connecting to the database: ${error.message}`);
  }
}
export default connectDB;
