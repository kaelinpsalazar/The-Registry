import React from "react";
// import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import AboutRegistryImagesItem from "../components/helpers/AboutRegistryImagesItem";

import image1 from "../assets/images/image1.jpeg"
import image2 from "../assets/images/image2.jpeg"
import image3 from "../assets/images/image3.jpeg"
import "./styles/home.css";


function Home() {
  // const [expandHome, setExpandHome] = useState(false);
  let location = useLocation();
  return (
    <>
      <div className="homeBg">
        <Card className="main-box d-flex justify-content-center">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Search Registry</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home"></Nav.Link>
                  <Nav.Link href="#link"></Nav.Link>
                  <NavDropdown
                    title="push this button"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/wedding">Wedding</NavDropdown.Item>
                    <NavDropdown.Item href="/graduation">
                      Graduation
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/newbaby">
                      New Baby
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"></NavDropdown.Item> */}
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Card>
        <div className="aboutRegistry">
        <div className="aboutText">

      <p>The Registry is a simple application that allows a couple, or a recent graduate to provide friends and family members access to their gift registry.
         A traditional gift registry is just a list of gift ideas from specific retail stores.
         Friends and family members can pick gift items from the list to celebrate the special event.
         The Registry application includes the gift registry with a link to that retail store. 
         The applicaion also displays the top three wishlist items, and a feature that allows for dollar amout gifts made with a credit card. 
         The gift giver can also input their name, email, and a short message for the Recipient.   


      </p>
        </div>
      </div>
      <div className="aboutRegistryImages">
        <div className="aboutRegistryImagesList">
          <AboutRegistryImagesItem name="the Wedding Registry" image={image1} />
          <AboutRegistryImagesItem name="the Graduation Registry" image={image2} />
          <AboutRegistryImagesItem name="the New Baby Registry" image={image3} />
        </div>
      </div>
      </div>
    </>
  );
}
export default Home;
