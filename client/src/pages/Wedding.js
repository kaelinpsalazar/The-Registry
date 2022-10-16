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

function Wedding() {
  // const { loading, error, data } = useQuery(QUERY_GIFT, {
  //   variables: { _id: "6349d26b9a0c4fc685a941f4" },
  // });
  const { giftId } = useParams();
  const { loading, error, data } = useQuery(QUERY_GIFTS, {
    variables: { giftId: giftId },
  });
  const gifts = data?.gifts || [];
  console.log(gifts);
  // console.log(error);

  const [showItem, setShowItem] = useState(false);

  return (
    <div>
      <div className="retaillinks">
        <h1>the Retail Stores we've Registered at</h1>
      </div>
      <div className="wedding">
        <h1>Our Wish List Items</h1>
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
          <MessageList title="Messages for the Newlyweds" />
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
    </div>
  );
}

export default Wedding;
