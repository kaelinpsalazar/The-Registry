import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import "./styles/profile.css";

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
    <div>
      <div class="card text-center">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  );
};

export default Profile;
