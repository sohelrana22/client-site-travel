import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import biman from './../../assets/images/biman.jpg'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="detail col-3">
                <img className="logo" src={biman} alt="" />
                <h2>Travel Agency</h2>
                <p>Travellers who have been in New Zealand for at least 14 days before the date of departure. This does not include the Realm Countries of the Cook Islands and Niue.</p>
            </div>
            <div className="detail col-3">
                <h3>Office</h3>
                <p>ITPL Road</p>
                <p>Mirpur, Dhaka</p>
                <p>Mirpur, Dhaka, Bangladesh</p>
                <p className="email">sohel252646@gmail.com</p>
                <h4>01796737590</h4>
            </div>
            <div className="detail col-3">
                <h3>Links</h3>
                <ul>
                    <li><Nav.Link as={NavLink} className="text-white" to="/home">Home</Nav.Link></li>
                    <li><Nav.Link as={NavLink} className="text-white" to="/travels">Travels</Nav.Link></li>
                    <li><Nav.Link as={NavLink} className="text-white" to="/myorder">My Order</Nav.Link></li>
                    <li><Nav.Link as={NavLink} className="text-white" to="/about">About</Nav.Link></li>
                    <li><Nav.Link as={NavLink} className="text-white" to="/contact">Contact us</Nav.Link></li>
                </ul>

            </div>
            <hr />
            <p className="copyright">Copyright @ 2021 - All Rights Reserved</p>
        </div>
    );
};

export default Footer;