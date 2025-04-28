import React, { useState } from "react";
import { Container, Button, Modal, Form } from "react-bootstrap";

export default function ModalContact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container className="d-grid gap-2">
      <Button variant="primary" onClick={handleShow} size="lg">
        Contáctanos
      </Button>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="text-center" closeButton>
          <Modal.Title className="fw-bold">Contáctanos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Correo electrónico</Form.Label>
              <p><small>Usaremos tu correo únicamente para responder a tu consulta.</small></p>
              <Form.Control
                type="email"
                placeholder="correo@ejemplo.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Cuéntanos de tu proyecto</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="outline-primary" onClick={handleClose}>
            Contactar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
