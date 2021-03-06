import React from "react";
import logofooter from "../images/logo.png";
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md="6">
            <div className="brand">
              <img src={logofooter} alt="Footer logo" />
              <p className="brandText">
                lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incidid ut labore et dolore magna aliqu eiusmod
                tempor incidid incidid consectetur adipiscing elit sed do eist
                omn liber incidid ut labore et dolore magna aliqu eiusmod tempor
                incidid ut labore et dolore magna al
              </p>
            </div>
          </Col>
          <Col md="4">
            <ul className="products">
              <p className="theme">Product</p>
              <li>
                <a href="#">Trending</a>
              </li>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Vendors</a>
              </li>
              <li>
                <a href="#">Brands</a>
              </li>
              <li>
                <a href="#">Storefront</a>
              </li>
            </ul>
            <ul className="products">
              <p className="theme">Legals</p>
              <li>
                <a href="#">License</a>
              </li>
              <li>
                <a href="#">Refond Policy</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
            <ul className="products">
              <p className="theme">Contacts</p>
              <p className="sampleText">
                Fell free get in touch with us via phone or send us an email
              </p>
              <li>
                <a href="tel: +12345678910">+1 234 567 89 10</a>
              </li>
              <li>
                <a href="mailto: support@khoomi.com">support@khoomi.com</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
