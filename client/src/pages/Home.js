import React from "react";
// import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "./styles/home.css";

function Home() {
  // const [expandHome, setExpandHome] = useState(false);
  let location = useLocation();

  return (
      <Card className="main-box d-flex justify-content-center">

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Search Registry</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
            <NavDropdown title="push this button 👉" id="basic-nav-dropdown">
              <NavDropdown.Item href="/wedding">Wedding</NavDropdown.Item>
              <NavDropdown.Item href="/graduation">Graduation</NavDropdown.Item>
              <NavDropdown.Item href="/newbaby">New Baby</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"></NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>




        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1"><Link to="/wedding"> Wedding </Link></option>
          <option value="2"><Link to="/graduation"> Graduation </Link></option>
          <option value="3"><Link to="/newbaby"> New Baby </Link></option>
        </Form.Select>

        {/* <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/wedding"> Wedding </Link>
        <Link to="/graduation"> Graduation </Link>
        <Link to="/newbaby"> New Baby </Link>
      </div> */}

        <Button className="sr" variant="primary">
          Search Registery
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="" />
            </Form.Group>
          </Form>
          </Button>

          <Button className="sr" variant="primary">
            Search Registry
          </Button>
      </Card>
  );
}
  

export default Home;
