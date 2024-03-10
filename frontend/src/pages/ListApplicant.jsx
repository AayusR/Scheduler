import { useEffect, useState } from 'react';
import axiosInstance from '../../axios';
import { useNavigate } from 'react-router-dom';
const ListApplicant = () => {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  const handleSortDataClick = () => {
   
    navigate('/sortdata');
  };
  useEffect(() => {
    const employerToken = localStorage.getItem("Employertoken");

    const jobId = localStorage.getItem("jobId");
    if (employerToken) {
      axiosInstance
        .get("/employer/getapplicant", {
          headers: {
            Authorization: `${employerToken}`,
            jobId: `${jobId}`,
          },
        })
        .then((response) => {
            setApplications(response.data);
            console.log(response.data);
          console.log("Job Offers:", response.data);
        })
        .catch((error) => console.error("Error fetching job offers:", error));
    }
  }, []);

  return (
    <div>
      <h1>List of Applicant</h1>
    
      <button onClick={handleSortDataClick} style={{ cursor: 'pointer', padding: '5px 10px', margin: '10px' }}>
          Sort Data
        </button>
      <div>
        {applications.map(application => (
          <div key={application._id} style={{ margin: '10px', border: '1px solid #ddd', padding: '10px' }}>
            <h2>{application.fullName}</h2>
            <p>Email: {application.email}</p>
            <p>Phone: {application.phone}</p>
            <p>Resume Link: {application.resumeLink}</p>
            <p>Work Experience: {application.workExperience} years</p>
            <p>Education: {application.education}</p>
            <p>Skills: {application.skills.join(', ')}</p>
            <p>LinkedIn Profile: {application.linkedinProfile}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListApplicant;
