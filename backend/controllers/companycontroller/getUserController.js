import JobApplication from "../../models/applicant/applicationform.js";
import JobOffer from "../../models/company/joboffer.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

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

















export default {
  getCreatedJobOffers,
};
