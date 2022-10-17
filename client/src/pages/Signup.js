import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import "./styles/profile.css";

import { QUERY_RECIPIENT } from "../utils/queries";
import Auth from "../utils/auth";

const Signup = () => {
  const { name: userParam } = useParams();

  return (
    <div>
      <div className="container flex-row justify-center">
        <h2 className="col-6 col-md-6 p-3 mb-5">viewing your profile.</h2>
        <div className="col-6 col-md-6 mb-5">Wishlist:</div>
      </div>
    </div>
  );
};

export default Signup;
