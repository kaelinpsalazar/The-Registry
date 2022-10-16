import React from "react";
import WishListItems from "../components/helpers/WishListItems";
import retaillinks from "../components/helpers/Retaillinks";
import { useQuery } from "@apollo/client";
import { QUERY_GIFTS, QUERY_MESSAGES } from "../utils/queries";
import GifterInput from "../components/helpers/GifterInput";
import MessageList from "../components/helpers/MessageList";

import "./styles/wedding.css";

function Graduation() {
  const { loading, error, data } = useQuery(QUERY_GIFTS, QUERY_MESSAGES);
  const gifts = data?.gifts || [];
  const messages = data?.messages || [];
  console.log(gifts);
  return (
    <div>
      <div className="retaillinks">
        <h1>Retail Stores We're Registered At:</h1>
        <button className="btn btn-primary"></button>
        <button className="btn btn-primary"></button>
        <button className="btn btn-primary"></button>
      </div>
      <div className="wedding">
        <h1>Our Wish List Items</h1>
        <div className="wishListList">
          <WishListItems />
        </div>

        <div className="messageBox">
          <div
            className="col-4 col-md-4 mb-3 p-1"
            style={{ border: "1px solid #1a1a1a" }}
          >
            <GifterInput />
          </div>
          <div className="message col-12 col-md-10 mb-3">
            <MessageList
              messages={messages}
              title="Messages for the Graduate"
            />
          </div>
        </div>
      </div>
      <div className="givemoney">
        <h3>...or you can just give money</h3>
      </div>
    </div>
  );
}

export default Graduation;
