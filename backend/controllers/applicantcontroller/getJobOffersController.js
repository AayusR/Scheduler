import JobOffer from "../../models/company/joboffer.js";

const getJobOffers = async (req, res) => {
  try {
    const currentDate = new Date();

    const jobOffers = await JobOffer.find({
      applicationDeadline: { $gt: currentDate },
      status: "open",
    });

    console.log(jobOffers);
    res.status(200).json(jobOffers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getJobById = async (req, res) => {
  try {
    const jobOfferId = req.params.jobOfferId;

    const jobOffer = await JobOffer.findById(jobOfferId);

    if (!jobOffer) {
      return res.status(404).json({ error: "Job offer not found" });
    }
    res.status(200).json(jobOffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default {
  getJobOffers,
  getJobById,
};
