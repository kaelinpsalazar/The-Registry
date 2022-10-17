import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
// import React, { useState } from "react";
import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import "./styles/header.css";
import Container from "react-bootstrap/Container";
function BrandExample() {
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
              <Button className="button-1" variant="primary" href="/login">
                Login
              </Button>
              <Button className="button-2" variant="primary" href="/signup">
                Register
              </Button>
              <Button className="button-3" variant="primary" href="/profile">
                Profile
              </Button>
            </Container>
          </div>
        </div>
      </Navbar>
    </>
  );
}
export default BrandExample;
