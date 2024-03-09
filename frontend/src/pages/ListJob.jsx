import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axiosInstance from "../../axios";

const ListJob = () => {
  const [jobOffers, setJobOffers] = useState([]);
  useEffect(() => {
    const employeeToken = localStorage.getItem("Employeetoken");
    console.log("Employee Token:", employeeToken);

    if (employeeToken) {
      axiosInstance
        .get("/employee/joboffers/", {
          headers: {
            Authorization: `${employeeToken}`,
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
      <h1>Job Offers</h1>
      <div className="job-offers-container">
        {jobOffers.map((offer) => (
          <Card key={offer._id} style={{ width: "18rem" }}>
            {" "}
            <Card.Body>
              {" "}
              <Card.Title>{offer.title}</Card.Title>{" "}
              <Card.Subtitle className="mb-2 text-muted">
                {offer.company}
              </Card.Subtitle>{" "}
              <Card.Text>Location: {offer.location}</Card.Text>{" "}
              <Card.Text>Description: {offer.description}</Card.Text>{" "}
              <Button variant="primary">Apply Now</Button>{" "}
            </Card.Body>{" "}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ListJob;
