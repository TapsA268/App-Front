import React from "react";
import NavbarComponent from "../components/navbar";
import CarouselComponent from "../components/carousel";
import ModalContact from "../components/modal_contact";
import { Container, Row, Col,  } from "react-bootstrap";
import "../index.css";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <Container className="text-center px-5">
        <Row>
          <Col className="mt-5">
            <h1 className="text-light mt-5">
              Impulsa tu negocio con nuestras soluciones tecnológicas.
            </h1>
            <p className="text-light lead"> Adquiere un valor único con tus clientes con soluciones a tu medida.</p>
            <ModalContact/>
          </Col>
          <Col>
            <CarouselComponent></CarouselComponent>
          </Col>
        </Row>
      </Container>
    </>
  );
}
