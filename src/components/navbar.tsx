import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Hey!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <NavDropdown title="Nuestros Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="/web_apps">
                Aplicaciones Web
              </NavDropdown.Item>
              <NavDropdown.Item href="/mobile_apps">
                Aplicaciones Móviles
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">
              Sobre nosotros
            </Nav.Link>          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
