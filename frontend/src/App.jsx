import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ListJob from "./pages/ListJob";
import Testimonials from "./pages/Testimonials";
import homepage from "./pages/homepage";
import Faqpage from "./pages/Faqpage";
import AddJobs from "./pages/AddJobs";
import Employerdashboard from "./pages/Employerdashboard";
import EmployeeSignupandlogin from "./pages/EmployeeSignupandlogin";
import EmployerSignupandlogin from "./pages/EmployerSignupandlogin";
import Employeedashboard from "./pages/Employeedashboard";
import NavbarComponent from "./Components/NavbarComponent";
import Footer from "./Components/Footer";
import CreateJob from "./pages/CreateJob";

function App() {
  const [loggedInState, setLoggedInState] = useState("logged-out");

  useEffect(() => {
    const employeeToken = localStorage.getItem("Employeetoken");
    const employerToken = localStorage.getItem("Employertoken");

    if (employeeToken) {
      setLoggedInState("employee");
    } else if (employerToken) {
      setLoggedInState("employer");
    } else {
      setLoggedInState("logged-out");
    }
  }, []);

  const renderRoutes = () => {
    switch (loggedInState) {
      case "employee":
        return (
          <Routes>
            <Route path="/" Component={Employeedashboard} />
            <Route path="/listjob" Component={ListJob} />
    
          </Routes>
        );
      case "employer":
        return (  <Routes>
          <Route path="/" Component={Employerdashboard} />
          <Route path="/createjob" element={<CreateJob />} />

        </Routes>);
      case "logged-out":
      default:
        return (
          <>
            <Routes>
              <Route path="/" Component={homepage} />

              <Route path="/testimonial" Component={Testimonials} />
              <Route path="/faq" Component={Faqpage} />
              <Route path="/addjobs" Component={AddJobs} />
              <Route
                path="/employeesignupandlogin"
                Component={EmployeeSignupandlogin}
              />
              <Route
                path="/employersignupandlogin"
                Component={EmployerSignupandlogin}
              />
            </Routes>
            <Footer />
          </>
        );
    }
  };

  return (
    <div>
      <NavbarComponent />
      {renderRoutes()}
    </div>
  );
}

export default App;
