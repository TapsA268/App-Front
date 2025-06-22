import React from "react";
import NavbarComponent from "../components/navbar";
import CarouselComponent from "../components/carousel";
import ModalContact from "../components/modal_contact";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";

export default function MobileApp() {
  return (
    <>
      <NavbarComponent />
      <Container className="px-5">
        <h1 className="text-center text-light mt-5">
          Desarrollamos apps móviles que acompañan al usuario donde sea que
          vaya, con un diseño moderno y un rendimiento impecable.
        </h1>
        <Row>
          <Col className="mt-5">
            <p className="text-light lead">
              Tus usuarios llevan el mundo en la palma de la mano —y tú deberías
              estar ahí con ellos. Desarrollamos apps móviles personalizadas que
              conectan contigo y con tu público: rápidas, funcionales, pensadas
              para ofrecer una experiencia fluida y coherente en todo momento.
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
