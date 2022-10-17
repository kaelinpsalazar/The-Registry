import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import "./styles/profile.css";
import Row from "react-bootstrap/Row";

import { QUERY_RECIPIENT } from "../utils/queries";
import Auth from "../utils/auth";

const Profile = () => {
  const { name: userParam } = useParams();

  // const { loading, data } = useQuery(
  //   userParam ? QUERY_RECIPIENT : "No Profile Found!",
  //   {
  //     variables: { name: userParam },
  //   }
  // );

  // const recipient = data?.recipient || {};
  // navigate to personal profile page if username is yours
  // if (Auth.loggedIn() && Auth.getProfile().data.name === userParam) {
  //   return <Navigate to="/profile" />;
  // }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!recipient?.name) {
  //   return <h4>You need to be logged in to see this!</h4>;
  // }

  return (
    <div className="containerProf">
      <div>
        <div className="card text-center">
          <div className="card-header">The Registry</div>
          <div className="card-body m-3 p-3">
            <h2 className="card-title">Your Profile</h2>
            <p className="card-text">
              Here you may check out profile information, and update your
              wishlist!
            </p>
            <Row>
              <div className="card wishlist col m-3 py-4">
                <div className="list-header text-center">Featured</div>
                <ul className="list-group list-group-flush text-start">
                  <li className="list-group-item">Name: </li>
                  <li className="list-group-item">Email:</li>
                  <li className="list-group-item">Wishlist Items:</li>
                </ul>
              </div>
              <div className="card wishlist col m-3 py-4">
                <div className="list-header text-center">Wishlist</div>
                <ul className="list-group list-group-flush text-start">
                  <li className="list-group-item">Microwave</li>
                  <li className="list-group-item">Knife Set</li>
                  <li className="list-group-item">Honeymoon Funds</li>
                </ul>
              </div>
            </Row>
            <a href="/" className="btn btn-primary btn-1 py-3 mt-3">
              Back To Home
            </a>
          </div>
          <div className="card-footer text-muted"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
