import JobOffer from "../../models/company/joboffer.js";

const createJob = async (req, res) => {
  try {
 

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
      title,
      description,
      requirements,
      numberOfEmployees,
      category,
      location,
      salary,
      applicationDeadline,

    });
console.log(newJobOffer);
    await newJobOffer.save();

    res
      .status(201)
      .json({
        message: "Job offer created successfully",
    
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default {
createJob
};
