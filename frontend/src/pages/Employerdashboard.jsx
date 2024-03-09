import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axiosInstance from "../../axios";

const Employerdashboard = () => {
  const [jobOffers, setJobOffers] = useState([]);
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
              <Button variant="primary">View Applicant</Button>{" "}
            </Card.Body>{" "}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Employerdashboard;
