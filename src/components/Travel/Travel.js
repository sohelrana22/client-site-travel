import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Travel = ({travel}) => {
    const {img, name, detail, key, price} = travel;
    return (
          <Zoom>
              <Card className="m-2 body-detail" style={{ width: '21rem' }}>
  <Card.Img variant="top" className="img-fluid" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Title>${price}</Card.Title>
    <Card.Text>{detail}</Card.Text>
    <NavLink to={`/travels/${key}`} className="btn btn-primary">Book Now</NavLink>
  </Card.Body>
</Card>
          </Zoom>
       
    );
};

export default Travel;