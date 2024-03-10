import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axiosInstance from "../../axios";
import { useNavigate } from 'react-router-dom'; 
const Employerdashboard = () => {
  const [jobOffers, setJobOffers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const employerToken = localStorage.getItem("Employertoken");
    console.log("Employer Token:", employerToken);

    if (employerToken) {
      axiosInstance
        .get("/employer/dashboard", {
          headers: {
            Authorization: `${employerToken}`,
          },
        })
        .then((response) => {
          setJobOffers(response.data);
          console.log("Job Offers:", response.data);
        })
        .catch((error) => console.error("Error fetching job offers:", error));
    }
  }, []);
  const handleApplyNow = (jobId) => {
    localStorage.setItem("jobId", jobId);
    axiosInstance.defaults.headers.common['Job-Id'] = jobId;

    navigate('/applicantlist');
  };



  return (
    <div>
      <h1>Dashboard</h1>
      <div className="job-offers-container">
        {jobOffers.map((offer) => (
          <Card key={offer._id} style={{ width: "18rem" }}>
            {" "}
            <Card.Body>
              {" "}
              <Card.Title>{offer.title}</Card.Title>{" "}
           
              <Card.Text>Location: {offer.location}</Card.Text>{" "}
              <Card.Text>Description: {offer.description}</Card.Text>{" "}
              <Button variant="primary" onClick={() => handleApplyNow(offer._id)} >View Applicant</Button>{" "}
            </Card.Body>{" "}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Employerdashboard;
