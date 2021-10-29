import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const {key} = useParams();
    const {travels} = useAuth()
const detailService = travels.find(travel => travel.key === Number(key));
const {img, name, detail, price} = detailService;


    return (
        <div className="my-4">
            {name ? (
                <Container>
                    <Row>
                        <Col>
                        <img className="img-fluid" src={img} alt="" />
                        </Col>
                        <Col>
                        <h1>{name}</h1>
                        <h2>{price}</h2>
                        <h3>{detail}</h3>
                        </Col>
                    </Row>
                </Container>
            ) : (
                <h1>No Result Found</h1>
            )

            }
            
        </div>
    );
};

export default MyOrder;