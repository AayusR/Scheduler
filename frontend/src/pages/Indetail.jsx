import { useEffect, useState } from "react";
import { Card} from "react-bootstrap";
import axiosInstance from "../../axios";

const Indetail = () => {
  const [jobOffers, setJobOffers] = useState([]);

  useEffect(() => {
    const employeeToken = localStorage.getItem("Employeetoken");
    console.log("Employee Token:", employeeToken);
    const jobId = localStorage.getItem("jobId");
    if (employeeToken) {
      axiosInstance
        .get("employee/upcomminginterview/", {
          headers: {
            Authorization: `${employeeToken}`,
            jobId: `${jobId}`,
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
      <h1>Detailed view</h1>
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
              <Card.Text>Category: {offer.category}</Card.Text>{" "}
              <Card.Text>Salary: $ {offer.salary}</Card.Text>{" "}
              <Card.Text>Application Deadline: $ {offer.applicationDeadline}</Card.Text>{" "}
              <Card.Text>Number Of Employees: {offer.numberOfEmployees}</Card.Text>{" "}
              <Card.Text>Description: {offer.description}</Card.Text>{" "}
            
            </Card.Body>{" "}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Indetail;
