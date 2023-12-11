import React from "react";
import Carousel from "react-bootstrap/Carousel";
import P1 from "./Images/P1.jpg";
import P2 from "./Images/P2.jpg";
import P3 from "./Images/P3.jpg";

function SimpleCarousel() {
  const imageStyle = {
    width: "800px",
    height: "550px",
    objectFit: "cover",
  };

  return (
    <Carousel interval={2000}>
      <Carousel.Item>
        <img
          style={imageStyle}
          className="d-block w-100"
          src={P1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Explore Nature</h3>
          <p>Discover the beauty of the great outdoors.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={imageStyle}
          className="d-block w-100"
          src={P2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>City Lights</h3>
          <p>Experience the vibrant energy of the city at night.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={imageStyle}
          className="d-block w-100"
          src={P3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Seaside Serenity</h3>
          <p>Relax by the ocean and enjoy the calming waves.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SimpleCarousel;
