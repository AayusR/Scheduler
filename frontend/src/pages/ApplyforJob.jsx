import { useState } from "react";
import axiosInstance from "../../axios";
import user_icon from "../assets/img/loginsignup/person.png";
import email_icon from "../assets/img/loginsignup/email.png";
const ApplyforJob = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  //const [resumeLink, setResumeLink] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [customQuestions, setCustomQuestions] = useState("");
  const [linkedinProfile, setLinkedinProfile] = useState("");

  const [success, setSuccess] = useState("");
  const handleSubmit = async () => {
    try {
      const employeeToken = localStorage.getItem("Employeetoken");
      console.log("Employee Token:", employeeToken);
      const jobId = localStorage.getItem("jobId");
      console.log("Employee Token:", employeeToken);
      const resumeLink = "45gt546g324r2";
      console.log("Employee form submit:", {
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
      const response = await axiosInstance.post(
        "/employee/joboffers/byid/submit-requirements/",
        {
          fullName: fullName,
          email: email,
          phone: phone,
          resumeLink: resumeLink,
          workExperience: workExperience,
          education: education,
          skills: skills,
          customQuestions: customQuestions,
          linkedinProfile: linkedinProfile,
        },
        {
          headers: {
            Authorization: `${employeeToken}`,
            UniqueId: `1709869845`,
         jobId: `${jobId}`,
          },
        }
      );

      console.log("Server response:", response.data);
      setSuccess(response.data.message);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };
  return (
    <div className="employee-signuploginpage">
      <div className="header">
        <div className="text">Apply For Job</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </div>

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="number"
            placeholder="Work Experience"
            onChange={(e) => setWorkExperience(e.target.value)}
            value={workExperience}
          />
        </div>

        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="Education"
            onChange={(e) => setEducation(e.target.value)}
            value={education}
          />
        </div>
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="Skills"
            onChange={(e) => setSkills(e.target.value)}
            value={skills}
          />
        </div>
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="Linkedin Profile"
            onChange={(e) => setLinkedinProfile(e.target.value)}
            value={linkedinProfile}
          />
        </div>
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="Any Queries?"
            onChange={(e) => setCustomQuestions(e.target.value)}
            value={customQuestions}
          />
        </div>
      </div>

      <div className="submit-container">
        <div className="submit" onClick={handleSubmit}>
          Submit
        </div>
      </div>
      {success}
    </div>
  );
};

export default ApplyforJob;
