import React from "react";
import WishListItems from "../components/helpers/WishListItems";
import retaillinks from "../components/helpers/Retaillinks";
import GifterInput from "../components/helpers/GifterInput";
import MessageList from "../components/helpers/MessageList";
import StripeContainer from "../components/helpers/StripeContainer";
import { useState } from "react";

import "./styles/graduation.css";

function Graduation() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div>
      <div className="retaillinks">
        <h1>the Retail Stores we've Registered at</h1>
      </div>
      <div className="graduation">
        <h1>My Wish List Items</h1>
        <div className="wishListList">
          <WishListItems />
        </div>
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px solid #1a1a1a" }}
        >
          <GifterInput />
        </div>
        <div className="col-12 col-md-10 mb-3">
          <MessageList title="Messages for the New Grad" />
        </div>
      </div>
      <div className="givemoney">
        <h1>...or you can just give us money!</h1>
        {showItem ? (
          <StripeContainer />
        ) : (
          <>
            <h3>$100</h3>
            <button onClick={() => setShowItem(true)}>
              Donate to The Registry!
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Graduation;
