import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import "./styles/header.css";
import Container from "react-bootstrap/Container";
function BrandExample() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className="nav" bg="dark" variant="dark">
        <div className="nav-container">
          <div>
            <Navbar.Brand className="text" href="#home">
              <Nav.Link className="theRegistry" href="/">
                The Registry
              </Nav.Link>
            </Navbar.Brand>
          </div>
          <div>
            <Container className="buttons">
              <Button
                className="button-1"
                variant="primary"
                onClick={handleShow}
              >
                Login
              </Button>
              <Button
                className="button-2"
                variant="primary"
                onClick={handleShow}
              >
                Register
              </Button>
              <Button className="button-3" variant="primary" href="/profile">
                Profile
              </Button>
            </Container>
          </div>
        </div>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default BrandExample;
