import JobOffer from "../../models/company/joboffer.js";
import JobApplication from "../../models/applicant/applicationform.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../uploads");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now().toString().substring(0, 10);

    cb(null, uniqueSuffix + ".pdf");
  },
});

const upload = multer({ storage });

const getJobOffers = async (req, res) => {
  try {
    const currentDate = new Date();

    const jobOffers = await JobOffer.find({
      applicationDeadline: { $gt: currentDate },
      status: "open",
    });

    res.status(200).json(jobOffers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getJobById = async (req, res) => {
  try {
    const jobOfferId = await req.header("jobId");

    const jobOffer = await JobOffer.findById(jobOfferId);

    if (!jobOffer) {
      return res.status(404).json({ error: "Job offer not found" });
    }
    res.status(200).json(jobOffer);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const postResume = async (req, res) => {
  try {
    await upload.single("pdfFile")(req, res, async (err) => {
      console.log(req.file.pdfFile);
      const pdfName = Date.now().toString().substring(0, 10);

      if (err) {
        console.log(err);

        throw new Error("File upload failed");
      }
      return res
        .status(200)
        .header("UniqueId", pdfName)
        .json({ message: `Resume saved successfully` });
    });
  } catch (error) {
    return res.status(500).json({ error: `${error.message}` });
  }
};

const postForm = async (req, res) => {
  try {
    const jobId = await req.header("jobId");
    const resumeLink = await req.header("UniqueId");

    const {
      fullName,
      email,
      phone,
      workExperience,
      education,
      skills,
      customQuestions,
      linkedinProfile,
    } = req.body;

    const application = new JobApplication({
      jobId,
      fullName,
      email,
      phone,
      resumeLink,
      workExperience,
      education,
      skills,
      customQuestions,
      linkedinProfile,
    });

    await application.save();

    return await res.json({
      message: "Job application submitted successfully",
    });
  } catch (error) {
    return res.json({ error: `${error.message}` });
  }
};

export default {
  getJobOffers,
  getJobById,
  postForm,
  postResume,
};
