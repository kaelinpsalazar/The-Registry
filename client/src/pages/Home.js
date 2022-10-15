import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./styles/home.css";

function Home() {
  return (
    // <div className="d-flex justify-content-center">

    <Card className="main-box d-flex justify-content-center">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="" />
        </Form.Group>
      </Form>
      <Button className="sr" variant="primary">
        Search Registry
      </Button>
    </Card>

    // </div>
  );
}

export default Home;
