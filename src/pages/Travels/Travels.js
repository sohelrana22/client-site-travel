import React from 'react';
import { Container } from 'react-bootstrap';
import Slide from "react-reveal/Slide";
import Travel from '../../components/Travel/Travel';
import useAuth from '../../hooks/useAuth';
import sectionBg from "./../../assets/images/bg.jpg";

const Travels = () => {
    const {travels} = useAuth()
    const travel = travels.slice(0, 12);
    return (
        <div className="py-5"  style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}
        >
            <Slide left>
            <h1 className="text-center text-white mb-2">Our All Travels</h1>
          </Slide>
          <Slide right>
            <p className="text-muted mb-0 text-center">
              Here you can find our all latest Travels. Choose some of them and
              try to grow up your daily life.
            </p>
          </Slide>
          <Container>
              <div className="my-3 d-flex flex-wrap justify-content-between">
                  {
                      travel.map((travel) => (<Travel key={travel.key}  travel={travel} />
                        ))}
              </div>
          </Container>
        </div>
    );
};

export default Travels;