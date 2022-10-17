import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
// import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
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
              <Link to="/">
                <Button className="theRegistry">The Registry</Button>
              </Link>
            </Navbar.Brand>
          </div>
          <div>
            <Container className="buttons">
              <Link to="/login">
                <Button className="button-1" variant="primary">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="button-2" variant="primary">
                  Register
                </Button>
              </Link>
              <Link to="/profile">
                <Button className="button-3" variant="primary">
                  Profile
                </Button>
              </Link>
            </Container>
          </div>
        </div>
      </Navbar>
    </>
  );
}
export default BrandExample;
