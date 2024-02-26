import {Container, Row, Col} from "react-bootstrap";
import Faqcomponent from "../Components/Faqcomponent";
const AddJobs = () => {
  return (
    <div className="addjobs-page">
      <div className="addjobs min-vh-100">
        <Container>
          <Row>

            <Col>
            <h1 className="fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s"> Add Jobs and Internship </h1>
            <p className="text-center animate__animated animate__fadeInUp animate__delay-1s"> Scheduler connects the Employers and Candidates following the interviews and Hiring Process. Ease your managing and interviewing experience, altogether.</p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quas voluptates officia assumenda dicta quis nemo, ut ratione doloribus et eos cupiditate molestiae inventore qui impedit rem totam corrupti necessitatibus.</p>
            </Col>

          </Row>
          <Row className="py-3">
            <Col>
            <h4 className="fw-bold">1. Lorem </h4>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatum ipsa veritatis, repellat deleniti unde nemo amet nam eveniet non soluta saepe aliquam, ut vero quibusdam delectus iste magnam pariatur.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea qui itaque maxime. Amet eaque eius quisquam, sed repellendus quidem adipisci libero ea ad nobis mollitia accusantium corporis pariatur quod delectus.</p>
            </Col>

          </Row>

          <Row className="py-3">
            <Col>
            <h4 className="fw-bold">2. Lorem </h4>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatum ipsa veritatis, repellat deleniti unde nemo amet nam eveniet non soluta saepe aliquam, ut vero quibusdam delectus iste magnam pariatur.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea qui itaque maxime. Amet eaque eius quisquam, sed repellendus quidem adipisci libero ea ad nobis mollitia accusantium corporis pariatur quod delectus.</p>
            </Col>

          </Row>
          <Row className="py-3">
            <Col>
            <h4 className="fw-bold">3. Lorem </h4>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatum ipsa veritatis, repellat deleniti unde nemo amet nam eveniet non soluta saepe aliquam, ut vero quibusdam delectus iste magnam pariatur.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea qui itaque maxime. Amet eaque eius quisquam, sed repellendus quidem adipisci libero ea ad nobis mollitia accusantium corporis pariatur quod delectus.</p>
            </Col>

          </Row>

        </Container>
      </div>
      
      <Faqcomponent/>


    </div>
  )
}

export default AddJobs