import React from "react";
import NavbarComponent from "../components/navbar";
import CarouselComponent from "../components/carousel";
import ModalContact from "../components/modal_contact";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";

export default function WebApp() {
  return (
    <>
      <NavbarComponent />
      <Container className="px-5">
        <h1 className="text-center  text-light mt-5">
          Creamos aplicaciones web a la medida, diseñadas para ofrecer una
          experiencia intuitiva, rápida y confiable.
        </h1>
        <Row>
          <Col className="mt-5">
            <p className="text-light lead">
              Desde plataformas internas hasta productos para clientes finales,
              cada solución está diseñada a tu medida, con tecnologías modernas,
              interfaces intuitivas y un enfoque en seguridad, rendimiento y
              experiencia de usuario. Tu visión, convertida en una plataforma
              digital confiable y escalable.
            </p>
          </Col>
          <Col>
            <CarouselComponent></CarouselComponent>
          </Col>
        </Row>
      </Container>
    </>
  );
}
