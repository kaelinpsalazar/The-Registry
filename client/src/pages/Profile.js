import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_RECIPIENT } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const { name: userParam } = useParams();

  const { loading, data } = useQuery(
    userParam ? QUERY_RECIPIENT : "No Profile Found!",
    {
      variables: { name: userParam },
    }
  );

  const recipient = data?.recipient || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.name === userParam) {
    return <Navigate to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!recipient?.name) {
    return <h4>You need to be logged in to see this!</h4>;
  }

  return (
    <div>
      <div className="container flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${recipient.name}'s` : "your"} profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">Wishlist:</div>
      </div>
    </div>
  );
};

export default Profile;
