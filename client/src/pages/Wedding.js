import React from "react";
import WishListItems from "../components/helpers/WishListItems";
import retaillinks from "../components/helpers/Retaillinks";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_GIFTS } from "../utils/queries";
import GifterInput from "../components/helpers/GifterInput";
import MessageList from "../components/helpers/MessageList";
import StripeContainer from "../components/helpers/StripeContainer";
import { useState } from "react";

import "./styles/wedding.css";
import Container from "react-bootstrap/esm/Container";

function Wedding() {
  const { giftId } = useParams();
  const { loading, error, data } = useQuery(QUERY_GIFTS, {
    variables: { giftId: giftId },
  });
  const gifts = data?.gifts || [];
  console.log(gifts);

  const [showItem, setShowItem] = useState(false);

  return (
    <div>
      <div className="weddingBg">
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
          <div
            className="col-4 col-md-4 mb-3 p-1"
            style={{ border: "1px solid #1a1a1a" }}
          >
            <GifterInput />
          </div>
          <div className="col-12 col-md-10 mb-3">
            <MessageList title="Messages for the Newlyweds" />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wedding;
