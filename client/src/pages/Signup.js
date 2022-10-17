import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Navigate, useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";
import "./styles/profile.css";
import { useMutation } from "@apollo/client";
import { ADD_REGISTER } from "../utils/mutations";

// import { QUERY_RECIPIENT } from "../utils/queries";
import Auth from "../utils/auth";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_REGISTER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="container flex-row justify-center">
        {data ? (
          <p>
            Success! You may now head{" "}
            <Link to="./profile">You may head to your profile!</Link>
          </p>
        ) : (
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label
                className="form-input"
                placeholder="Your username"
                name="username"
                type="text"
                value={formState.name}
                onChange={handleChange}
              >
                Name
              </Form.Label>
              <Form.Control placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="form-input"
                placeholder="Enter email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              className="login-btn"
              style={{ cursor: "pointer" }}
              variant="!important"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </div>
    </div>
  );
};

export default Signup;
