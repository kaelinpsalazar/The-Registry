import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Sign Up</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Header;
