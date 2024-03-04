import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job', 
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: Number,
  resumeLink: String, 

  workExperience: {
    type: Number, 
    default: 0, 
  },
  education: String,
  skills:  {
    type: [String], 
    default: null, 
  },
  extraQuestions: String,
  linkedinProfile: String, 
});

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

export default JobApplication;
