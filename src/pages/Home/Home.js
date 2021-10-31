import React from "react";
import bgImage from "./../../assets/images/bg.jpg";
import banner from "./../../assets/images/banner.jpg"
import slider1 from "./../../assets/images/slider1.jpg"
import slider2 from "./../../assets/images/slider2.jpg"
import slider3 from "./../../assets/images/slider3.jpg"
import t1 from "./../../assets/images/t1.jpeg"
import t2 from "./../../assets/images/t2.jpeg"
import t3 from "./../../assets/images/t3.jpeg"
import t4 from "./../../assets/images/t4.jpeg"
import { Container, Row, Carousel, Accordion } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Zoom from 'react-reveal/Zoom';
import { NavLink } from "react-router-dom";
import './Home.css'
import useAuth from "../../hooks/useAuth";
import Travel from "../../components/Travel/Travel";
import './Home.css'

const Home = () => {
  const {travels} = useAuth()
  const travel = travels.slice(0, 6);
  
  return (
    <div>
      
      <div
        style={{
          background: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              <Bounce left cascade>
                <h1 className="text">Well come to Al-Karim Travel Agency</h1>
              </Bounce>

              <Bounce right cascade>
                <p className="my-4 text fs-5">
                A travel agency is a private retailer or public service that provides travel and tourism-related services to the people. And suppliers such as activities, airlines, car rentals, cruise lines, hotels, railways, travel insurance, and package tours. Here you can know about the Top 10 Travel Agency in Bangladesh.
                </p>
              </Bounce>

              <Bounce>
                <NavLink
                  to='/travels'
                  className="rounded-pill fs-5 btn btn-primary py-2 px-4">
                  View Travels
                </NavLink>
              </Bounce>
            </div>
          </div>
        </Container>
      </div>
      <div
        style={{ background: `url(${bgImage})`, backgroundAttachment: "fixed" }}
      >
        <div className="container">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider1}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider2}
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider3}
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        <div>
        <Zoom top>
        <h2 className="text-white mt-5 mb-4 d-flex justify-content-center">Travelling Gallery</h2>
        </Zoom>
          <hr />
        </div>
        <div className="d-flex">
          <img className="w-25" src={t1} alt="" />
          <img className="w-25" src={t2} alt="" />
          <img className="w-25" src={t3} alt="" />
          <img className="w-25" src={t4} alt="" />
        </div>
        <div>
          <h2 className="text-white d-flex justify-content-center mt-5">Our Mission & Vision</h2>
          </div>
       <div className="d-flex mt-5">
       <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>About Al-Karim Travel Agency. Which People Question?</Accordion.Header>
    <Accordion.Body>
    A travel agency is a private retailer or public service that provides travel and tourism-related services to the people. And suppliers such as activities, airlines, car rentals, cruise lines, hotels, railways, travel insurance, and package tours. Here you can know about the Top 10 Travel Agency in Bangladesh.They are the number one IATA travel agent who gets many awards from Airlines and GDS companies. Most attractive part of an online travel agent. They recommend the world’s top travel agents and suggest those companies for your best price and deal.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Travel Agency History in Bangladesh:</Accordion.Header>
    <Accordion.Body>
    After the independence of 1971, the first generation of travel agents in Bangladesh began to feel united under one umbrella to create a platform for the wider interests of travel agencies to protect their rights and privileges and ensure the health of travel and tourism. Sector. On the other hand, they were more interested in developing fellowship and better understanding among them. The platform was launched in 1974 and 1975 and continues to achieve results.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Why Al-Karim Travel Agency. our 1st recommendation?</Accordion.Header>
    <Accordion.Body>
    The top Travel agent in Bangladesh is Al-Karim Travel Agency by Google reviews and Facebook reviews. They are the number one IATA travel agent who gets many awards from Airlines and GDS companies. Most attractive part of an online travel agent. They recommend the world’s top travel agents and suggest those companies for your best price and deal. We found that they provide GDS training(reservation), Airline training, visa assisting training, travel agency management training, and online travel business development training. So as a travel professional in Bangladesh, we made them our top recommendation. for details or any kind of help contact with them:
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
<div className="w-90 h-100">
  <img src="https://image.freepik.com/free-vector/flat-traveling-banner-template_23-2148178437.jpg" alt="" />
</div>
       </div>
        <Container className="py-5">
          <Slide left>
            <h2 className="text-center text-white mb-2">Featured Destinations</h2>
          </Slide>
          <Slide right>
            <p className="text-muted text-center">
              Here you can find our all latest travels related information. Choose some of them and
              try to grow up your daily life.
            </p>
          </Slide>
         <div className="my-3 d-flex flex-wrap justify-content-between">
         <Row className="home-service">
            {travel?.map((travel) => (
              <Travel travel={travel} key={travel.key}></Travel>
            ))}
          </Row>
         </div>
        </Container>
      </div>
    </div>
    
  );
};

export default Home;