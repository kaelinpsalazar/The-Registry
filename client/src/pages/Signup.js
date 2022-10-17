import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import "./styles/profile.css";

import { QUERY_RECIPIENT } from "../utils/queries";
import Auth from "../utils/auth";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Signup = () => {
  const { name: userParam } = useParams();

  return (
    <div>
      <div className="container flex-row justify-center">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className="login-btn" variant="!important" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
