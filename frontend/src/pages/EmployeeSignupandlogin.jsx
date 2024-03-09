import { useState } from "react";
import axiosInstance from "../../axios";
import user_icon from "../assets/img/loginsignup/person.png";
import email_icon from "../assets/img/loginsignup/email.png";
import password_icon from "../assets/img/loginsignup/password.png";

const EmployeeSignupandlogin = () => {
  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [action, setAction] = useState("EMPLOYEE-Sign Up");

  const handleSignUp = async () => {
    try {
      console.log("Sign up:", { fName, lName, email, password });
      const response = await axiosInstance.post("/employee/signup", {
        fName: fName,
        lName: lName,
        email: email,
        password: password,
      });

      console.log("Server response:", response.data);
      setSuccess(response.data.message);
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  const handleLogin = async () => {
    try {
      console.log("Login up:", { email, password });
      const response = await axiosInstance.post("/employee/login", {
        email: email,
        password: password,
      });

      console.log("Server response:", response.data);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="employee-signuploginpage">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div>
            <div className="input my-4">
              <img src={user_icon} alt="" />
              <input
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={fName}
              />
            </div>

            <div className="input">
              <img src={user_icon} alt="" />
              <input
                type="text"
                placeholder="Last Name"
                value={lName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
        )}

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
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {action === "EMPLOYEE-Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          {" "}
          Lost Password ? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "EMPLOYEE-Sign Up" ? "submit" : "submit gray"}
          onClick={action === "EMPLOYEE-Sign Up" ? handleSignUp : handleLogin}
        >
          {action === "EMPLOYEE-Sign Up" ? "EMPLOYEE-Sign Up" : "Login"}
        </div>

        {action === "EMPLOYEE-Sign Up" && (
          <div
            className={action === "Login" ? "submit" : "submit gray"}
            onClick={() => {
              setAction("Login");
            }}
          >
            {action === "EMPLOYEE-Sign Up" ? "Login" : ""}
          </div>
        )}
      </div>

      {success}
    </div>
  );
};

export default EmployeeSignupandlogin;
