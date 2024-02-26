import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">

          <Col lg="5">
          <h1> Scheduler </h1>
          <p className="desc"> Meet Scheduler, your interview scheduling superhero. No more coordination chaos; it's all in one place. Customize slots, automate invites, and let Scheduler handle time zones. Elevate your hiring game effortlessly. </p>
          <div className="no mb-1 mt-4">
            <Link className="text-decoration-none">
            <i className="fa-brands fa-whatsapp"></i>
            <p className="m-0"> +977-9768448080</p>
            
            </Link>
          </div>
          <div className="mail">
            <Link className="text-decoration-none">
            <i className="fa-regular fa-envelope"></i>
            <p className="m-0"> engineersector@gmail.com</p>
            </Link>
          </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
          <h5 className="fw-bold"> Menu </h5>
          <Link to="">Home</Link>
          <Link to="class">Class</Link>
          <Link to="testimonial">Testimonial</Link>
          <Link to="faq">FAQ</Link>
          <Link to="addjobs">AddJobs</Link>
          
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
          <h5 className="fw-bold mb-3"> Be a member of Scheduler
          </h5>
          <div className="subscribes">
            <input type="text" placeholder="Be a member..."/>
            <button className="btn btn-danger rounded-end rounded-0">Endorse</button>
          </div>
          <div className="social mt-3 ">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
          </Col>
        </Row>
        <Col>
        <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Scheduler Pvt.</span> , All Right Reserved</p>
        </Col>

      </Container>
    </div>
  )
}

export default Footer