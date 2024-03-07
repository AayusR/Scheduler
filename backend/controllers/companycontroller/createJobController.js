import JobOffer from "../../models/company/joboffer.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createJob = async (req, res) => {
  try {
    const token = await req.header("Authorization");

    if (!token) {
      return res.sendStatus(401).json({ error: "Couldnt get token" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_C);

    const userCompany = decodedToken.company;


    const {
      title,
      description,
      requirements,
      numberOfEmployees,
      category,
      location,
      salary,
      applicationDeadline,
    } = req.body;

    const newJobOffer = new JobOffer({
      title: title,
      description: description,
      requirements: requirements,
      numberOfEmployees: numberOfEmployees,
      category: category,
      location: location,
      salary: salary,
      applicationDeadline: applicationDeadline,
      company: userCompany,
    });

    await newJobOffer.save();

    res.status(201).json({
      message: "Job offer created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export default {
  createJob,
};
