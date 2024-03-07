import JobApplication from "../../models/applicant/applicationform.js";
import JobOffer from "../../models/company/joboffer.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
import fs from 'fs'


const getCreatedJobOffers = async (req, res) => {
  try {
    const token = await req.header("Authorization");

    if (!token) {
      return res.sendStatus(401).json({ error: "Couldnt get token" });
    }


      const decodedToken = jwt.verify(token, process.env.JWT_SECRET_C);

      const userCompany = decodedToken.company;

      const jobOffers = await JobOffer.find({
        company: userCompany,
      });

      return res.status(200).json(jobOffers);
 
  } catch (error) {

    res.status(500).json({ error: error.message });
  }
};


const getApplicant = async (req, res) => {
  try {
    const jobId = await req.header("jobId");
    const jobApplicant = await JobApplication.find({
      jobId: jobId,
    });


   await fs.writeFile('./algorithms/job_applicants.json', JSON.stringify(jobApplicant, null, 4), (err) => {
      console.log("hellp");
      if (err) {
          console.error('Error writing JSON data to file:', err);
          return res.status(500).json({ error: 'Internal Server Error' });
   } })



    return res.status(200).json(jobApplicant);
  } catch (error) {
    console.error("Error in getApplicant:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};








export default {
  getCreatedJobOffers,
  getApplicant,
};
