import React from "react";
import NavbarComponent from "../components/navbar";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";

export default function About() {
  return (
    <>
      <NavbarComponent />
      <Container className="text-center px-5">
        <Container>
          <h1 className="text-light mt-5">Sobre Nosotros</h1>
          <p className="text-light lead">
            Todo comenzó con una sola idea y el deseo inquebrantable de
            materializarla. Hey! nace desde la pasión por crear soluciones
            tecnológicas que no solo funcionen, sino que generen confianza y
            hagan sentir al usuario que está siendo escuchado. Aunque el camino
            apenas inicia y el equipo por ahora es pequeño, la visión es clara:
            construir con empatía, precisión y propósito. Cada paso que damos
            está impulsado por la obsesión de mejorar la vida de las personas a
            través de experiencias digitales significativas y personalizadas.
          </p>
        </Container>
        <Row>
          <Col className="mt-5">
            <h1 className="text-light mt-5">Misión</h1>
            <p className="text-light lead">
              Diseñar y desarrollar soluciones tecnológicas personalizadas que
              brinden satisfacción real a cada cliente, generando experiencias
              que inspiren confianza, cercanía y valor duradero.
            </p>
          </Col>
          <Col className="mt-5">
            <h1 className="text-light mt-5">Visión</h1>
            <p className="text-light lead">
              Convertirnos en una referencia en innovación digital centrada en
              las personas, siendo reconocidos por transformar necesidades
              complejas en soluciones simples, confiables y elegantes.
            </p>
          </Col>
          <Col className="mt-5 text-light lead">
            <h1 className="text-light mt-5">Valores</h1>
            <ul>
              <li>Empatía</li>
              <li>Calidad</li>
              <li>Innovación</li>
              <li>Compromiso</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}
