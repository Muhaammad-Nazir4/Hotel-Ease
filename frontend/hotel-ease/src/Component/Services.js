import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import luxury from "./Images/icons/luxury.png";
import pool from "./Images/icons/pool.png";
import dinnerTable from "./Images/icons/dinner-table.png";

function ServicesSection() {
  const imageSize = {
    width: "200px", // Adjust the width as needed
    height: "200px", // Adjust the height as needed
    objectFit: "cover", // This property ensures that the image covers the entire area without stretching
    alignSelf: "center",
  };

  return (
    <section className="services-section">
      <Container>
        <h2 className="text-center mb-5 mt-5">Our Services</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={luxury} style={imageSize} />
              <Card.Body>
                <Card.Title>Luxurious Rooms</Card.Title>
                <Card.Text>
                  Enjoy our spacious and comfortable rooms with modern
                  amenities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={pool} style={imageSize} />
              <Card.Body>
                <Card.Title>Outdoor Pool</Card.Title>
                <Card.Text>
                  Take a dip in our refreshing outdoor pool surrounded by
                  beautiful scenery.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={dinnerTable} style={imageSize} />
              <Card.Body>
                <Card.Title>Fine Dining</Card.Title>
                <Card.Text>
                  Indulge in exquisite cuisine at our on-site restaurant with a
                  diverse menu.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ServicesSection;
