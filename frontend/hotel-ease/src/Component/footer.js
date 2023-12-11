import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-5 bg-dark text-light p-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              <FaEnvelope size={30} /> Email: info@example.com
            </p>
            <p>
              <FaPhone size={30} /> Phone: +1 123-456-7890
            </p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <p>
              <FaFacebook className="mr-2" size={30} />{" "}
              <FaTwitter className="mr-2" size={30} />{" "}
              <FaInstagram className="mr-2" size={30} />
            </p>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; 2023 Hotel Ease. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
