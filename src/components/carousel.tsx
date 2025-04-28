import React from "react";
import { Carousel, Image, Container } from "react-bootstrap";

export default function CarouselComponent() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image
          src="src\assets\images\Img1.jpg"
          alt="img1"
          className="img-fluid"
          style={{ height: "500px", width: "1500px" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="src\assets\images\Img2.jpg"
          alt="img2"
          className="img-fluid"
          style={{ height: "500px", width: "1500px" }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="src\assets\images\Img3.png"
          alt="img3"
          className="img-fluid"
          style={{ height: "500px", width: "1500px" }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
