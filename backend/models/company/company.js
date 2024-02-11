import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  department: { 
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  }
});

const Company = mongoose.model("Company", companySchema);

export default Company;
