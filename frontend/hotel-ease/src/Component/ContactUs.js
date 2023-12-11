import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContactUs() {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Row>
        <Col md={6}>
          <h3>Our Location</h3>
          <p>123 Main Street, Cityville, Country</p>
          <p>ZIP Code: 12345</p>
        </Col>
        <Col md={6}>
          <h3>Contact Information</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>Map</h3>
          {/* Include your map component or embed a map here */}
          <div
            style={{ width: "100%", height: "400px", border: "1px solid #ccc" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27193.33002204237!2d74.33534784088141!3d31.57448849484834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b273d6ed0c1%3A0x4dcac84ea2200944!2sUniversity%20of%20Engineering%20and%20Technology%2C%20Lahore!5e0!3m2!1sen!2s!4v1701438330316!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: "0" }} // Fix: Use the correct object notation for style
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
