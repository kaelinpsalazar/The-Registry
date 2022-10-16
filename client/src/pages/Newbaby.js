import React from "react";
import imageM from "../assets/images/imageM.jpg";

import WishListItems from "../components/helpers/WishListItems";
import retaillinks from "../components/helpers/Retaillinks";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_GIFTS } from "../utils/queries";
import GifterInput from "../components/helpers/GifterInput";
import MessageList from "../components/helpers/MessageList";
import StripeContainer from "../components/helpers/StripeContainer";
import { useState } from "react";

import "./styles/newbaby.css";

function Newbaby() {
  const [showItem, setShowItem] = useState(false);

  const { giftId } = useParams();
  const { loading, error, data } = useQuery(QUERY_GIFTS, {
    variables: { giftId: giftId },
  });
  const gifts = data?.gifts || [];
  console.log(gifts);

  return (
    <div>
      <div className="newbabyBg">
        <h1>The Newborn Registry</h1>
        <img className="picture" src={imageM} width="700" alt="wedding" />
        <div className="wedding">
          <h1>Our Wish List Items</h1>
          <div className="wishListList">
            <WishListItems />
          </div>
          <div className="retaillinks p-5 justify-content-around d-flex">
            <h1>Retail Stores We're Registered At:</h1>
            <a href="https://www.potterybarn.com/" target="_blank">
              <button className="btn btn-1">Pottery Barn</button>
            </a>
            <a href="https://www.target.com/" target="_blank">
              <button className="btn btn-1">Target</button>
            </a>
            <a href="https://www.bedbathandbeyond.com/" target="_blank">
              <button className="btn btn-1">Bed Bath & Beyond</button>
            </a>
          </div>
          <div className="messageBox d-flex">
            <div
              className="col-6 col-md-6 mb-3 p-1"
              style={{ border: "1px solid #1a1a1a" }}
            >
              <GifterInput />
            </div>
            <div className="message col-12 col-md-10 mb-3">
              <MessageList title="Messages for the new parents" />
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
        </div>
      </div>
    </div>
  );
}

export default Newbaby;
