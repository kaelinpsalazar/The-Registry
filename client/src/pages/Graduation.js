import React from "react";
import WishListItems from "../components/helpers/WishListItems";
import retaillinks from "../components/helpers/Retaillinks";
import { useQuery } from "@apollo/client";
import { QUERY_GIFTS, QUERY_MESSAGES } from "../utils/queries";
import GifterInput from "../components/helpers/GifterInput";
import MessageList from "../components/helpers/MessageList";
import StripeContainer from "../components/helpers/StripeContainer";
import { useState } from "react";

import "./styles/wedding.css";

function Graduation() {
  const [showItem, setShowItem] = useState(false);
  const { loading, error, data } = useQuery(QUERY_GIFTS, QUERY_MESSAGES);
  const gifts = data?.gifts || [];
  const messages = data?.messages || [];
  console.log(gifts);

  return (
    <div>
      <div className="wedding">
        <h1>Our Wish List Items</h1>
        <div className="wishListList">
          <WishListItems />
        </div>

        <div className="messageBox">
          <div
            className="messageBox col-12 col-md-10 mb-3 p-3"
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
        <h1>...or you can just give us money!</h1>
        {showItem ? (
          <StripeContainer />
        ) : (
          <>
            <button onClick={() => setShowItem(true)}>
              Donate $100 to The Registry!
            </button>
          </>
        )}

        <h3>...or you can just give money</h3>
      </div>
    </div>
  );
}
export default Graduation;
