import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Navigate, useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";
import "./styles/login.css";
import { useMutation } from "@apollo/client";

// import { QUERY_RECIPIENT } from "../utils/queries";
import Auth from "../utils/auth";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LOGIN_RECIPIENT } from "../utils/mutations";

const Login = (props) => {
  //   const { name: userParam } = useParams();
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_RECIPIENT);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <div className="container flex-row justify-center">
        {data ? (
          <p>
            Success! You may now head{" "}
            <Link to="./profile">back to the homepage.</Link>
          </p>
        ) : (
          <Form onSubmit={handleFormSubmit}>
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
        )}
        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </div>
    </div>
  );
};

export default Login;
