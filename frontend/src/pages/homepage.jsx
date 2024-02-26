import {Container, Row, Col} from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import { NewestClass, dataSwiper } from "../data/index";
import {useNavigate} from "react-router-dom";
import Faqcomponent from "../Components/Faqcomponent";

import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from "aos";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';



const homepage = () => {
  let navigate =useNavigate();
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">

            <Col lg="6">
            <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s"> 
              Schedule <br/> <span> Your Interviews</span><br/> With us !

            </h1>
            <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
              Scheduler is a Job Interview Scheduling platform that helps corporates to organise and manage their interview slots.
            </p>
            <button className="btn btn-success btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate("/class")}>See anything ...</button>
            <button className="btn btn-outline-success btn-lg rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s">See anything..</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
            <img src={HeroImage} alt="hero-img " className="animate__animated animate__fadeInUp" /></Col>
          </Row>

        </Container>
      </header>
      <div className="class w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold">{/* Newest Class for advertisement */}Jobs and Interns</h1>
            <p className="text-center">
              Scheduler is a common platform for searching, hiring and managing slots
            </p>
            </Col>
          </Row>
          <Row>
            {NewestClass.map((classItem) => {
              return (
              <>
              {AOS.init()}
              <Col key={classItem['id']} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={classItem.delay}>
                  <img src={classItem.image} alt="unsplash.com" className="w-100 mb-5 rounded-top"/>
                  <div className="star mb-2">
                    <i className={classItem.star1}></i>
                    <i className={classItem.star2}></i>
                    <i className={classItem.star3}></i>
                    <i className={classItem.star4}></i>
                    <i className={classItem.star5}></i>
                  </div>

                  <h5 className="mb-5 px-3">{classItem['title']}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3"> 
                    <p className="m-0 text-primary fw-bold">{classItem.price}</p>
                    <button className="btn btn-danger rounded-1">
                      {classItem.buy}
                    </button>
                  </div>
              </Col>
              </>
              );
              })}
      
          </Row>
          <Row>
            <Col className="text-center">
            <button className="btn btn-success rounded-5 btn-lg my-4" data-aos="fade-up" data-aos-duration="1000" onClick={() => navigate("/class")}> See All Listings 
            <i className="fa-solid fa-chevron-right ms-1"></i>  
            </button>
            
            </Col>
          </Row>

        </Container>
      </div>
      <div className="testimonial">
        <Container>
          <Row>
            <Col> 
            <h1 className="text-center fw-bold my-5">
              Testimonials - Corporates and Candidates Reviews
               
            </h1>

            
            </Col>
          </Row>

          <Row>
          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataSwiper.map((data)=> {
          return(<SwiperSlide key={data.id} className="shadow-sm">
            <p className="desc">{data.desc}</p>
            <div className="people">
              <img src={data.image} alt=""/>
              <div>
                <h5 className="mb-1">{data.name}</h5>
                <p className="m-0 fw-bold">{data.skill}</p>

              </div>
            </div>

          </SwiperSlide>

          )
        })}
        
        
      </Swiper>

          </Row>
        </Container>
      </div>


      {/*Section of Faq */}
      <Faqcomponent/>



      {/*Section of Faq */}
    </div>
  )
}

export default homepage