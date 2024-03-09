
import{Routes,Route} from "react-router-dom";


import Classpage from "./pages/Classpage";
import Testimonials from "./pages/Testimonials";
import homepage from "./pages/homepage";
import Faqpage from "./pages/Faqpage";
import AddJobs from "./pages/AddJobs";
import EmployeeSignupandlogin from "./pages/EmployeeSignupandlogin";
import EmployerSignupandlogin from "./pages/EmployerSignupandlogin";


import NavbarComponent from "./Components/NavbarComponent";
import Footer from "./Components/Footer";








function App() {
  
  return(

    <div> 
      <NavbarComponent/>
      <Routes>
        <Route  path ="/" Component={homepage}/>
        <Route  path ="/class" Component={Classpage}/>
        <Route  path ="/testimonial" Component={Testimonials}/>
        <Route  path ="/faq" Component={Faqpage}/>
        <Route  path ="/addjobs" Component={AddJobs}/>
        <Route  path ="/employeesignupandlogin" Component={EmployeeSignupandlogin} />
        <Route  path ="/employersignupandlogin" Component={EmployerSignupandlogin} />



      </Routes>
      <Footer/>
    </div>

  )
}

export default App
