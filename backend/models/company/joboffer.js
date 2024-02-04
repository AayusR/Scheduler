import mongoose from "mongoose";
const jobOfferSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  requirements: { type: String },
  category: { type: String },
  location: { type: String },
  salary: { type: Number },
  applicationDeadline: { type: Date },
  numberOfEmployees: { type: Number, required: true },

  datePosted: { type: Date, default: Date.now },
  status: { type: String, enum: ["open", "closed"], default: "open" },
});

const JobOffer = mongoose.model("JobOffer", jobOfferSchema);

export default JobOffer;
