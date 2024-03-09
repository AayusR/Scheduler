/* This classpage is for Jobs and Intern Advertise i.e. of EMployers and Canidate Sections*/

import {Container,Row,Col} from "react-bootstrap";
import { allClass } from "../data/index";

import Faqcomponent from "../Components/Faqcomponent";

const Classpage = () => {
  return (
    <div className="class-page">
        <div className="class min-vh-100">

            <Container>
              <Row>
                <Col>
                <h1 className="fw-bold Item"> See All Class Listing

                </h1>
                <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </Col>
              </Row>
              <Row>
                  {allClass.map((classItem) => {
                  return (
                  <Col key={classItem.id} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={classItem.delay}>
                      <img src={classItem.image} alt="unsplash.com" className="w-100 mb-5 rounded-top"/>


                      <div className="star mb-2">
                        <i className={classItem.star1}></i>
                        <i className={classItem.star2}></i>
                        <i className={classItem.star3}></i>
                        <i className={classItem.star4}></i>
                        <i className={classItem.star5}></i>


                      </div>

                      <h5 className="mb-5 px-3">{classItem.title}</h5>
                      <div className="ket d-flex justify-content-between align-items-center px-3"> 
                        <p className="m-0 text-primary fw-bold">{classItem.price}</p>
                        <button className="btn btn-danger rounded-1">
                          {classItem.buy}
                        </button>
                      </div>


                  </Col>
                  );
                  })}
              </Row>

            </Container>
        </div>
        <Faqcomponent/>
    </div>
    
  )
}

export default Classpage