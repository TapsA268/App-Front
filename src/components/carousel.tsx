import React from "react";
import { Carousel, Image, Container } from "react-bootstrap";

export default function CarouselComponent() {
  return (
    <Carousel fade controls={false} indicators={false}>
      <Carousel.Item>
        <Image
          src="src\assets\images\Img1.jpg"
          alt="img1"
          className="img-fluid rounded-transparent"
          style={{ height: "700px", width: "1500px" }}
        />
        <Carousel.Caption>
          <h3>Soluciones en </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="src\assets\images\Img2.jpg"
          alt="img2"
          className="img-fluid rounded-transparent"
          style={{ height: "700px", width: "1500px" }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="src\assets\images\Img6.jpg"
          alt="img3"
          className="img-fluid rounded-transparent"
          style={{ height: "700px", width: "1500px" }}
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
