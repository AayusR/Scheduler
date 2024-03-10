import { useState } from "react";
import axiosInstance from "../../axios";
import user_icon from "../assets/img/loginsignup/person.png";
const CreateJob = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [requirements, setRequirements] = useState("");
    const [numberOfEmployees, setNumberOfEmployees] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [salary, setSalary] = useState("");
    const [applicationDeadline, setApplicationDeadline] = useState("");
    const [success, setSuccess] = useState("");
    const handleSubmit = async () => {
        try {
            const employerToken = localStorage.getItem("Employertoken");
            console.log("Create Job:", {
                title,
                description,
                requirements,
                numberOfEmployees,
                category,
                location,
                salary,
                applicationDeadline,
            });
            const response = await axiosInstance.post("/employer/create-job", {
              
                title: title,
                description: description,
                requirements: requirements,
                numberOfEmployees: numberOfEmployees,
                category: category,
                location: location,
                salary: salary,
                applicationDeadline: applicationDeadline,
            },
            
            {
                headers: {
                  Authorization: `${employerToken}`,
                 
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
                <div className="text">Create Job</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input
                        type="text"
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>

                <div className="input">
                    <img src={user_icon} alt="" />
                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="input">
                    <img src={user_icon} alt="" />
                    <input
                        type="text"
                        placeholder="Requirements"
                        value={requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                    />
                </div>
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input
                        type="number"
                        placeholder="Number Of Employees"
                        onChange={(e) => setNumberOfEmployees(e.target.value)}
                        value={numberOfEmployees}
                    />
                </div>
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input
                        type="text"
                        placeholder="Category"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    />
                </div>

                <div className="input">
                    <img src={user_icon} alt="" />
                    <input
                        type="text"
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
                    />
                </div>
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input
                        type="number"
                        placeholder="Salary"
                        onChange={(e) => setSalary(e.target.value)}
                        value={salary}
                    />
                </div>
                <div className="input">
                  <label>Application Deadline</label>
                    <input
                        type="date"
                        placeholder="Application Deadline"
                        onChange={(e) => setApplicationDeadline(e.target.value)}
                        value={applicationDeadline}
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

export default CreateJob;