import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./styles/home.css";

function Home() {
  return (
      <Card className="main-box d-flex justify-content-center">
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">Graduation</option>
          <option value="2">Wedding</option>
          <option value="3">New Baby</option>
        </Form.Select>
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
