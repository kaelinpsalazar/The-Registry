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
import Container from "react-bootstrap/esm/Container";

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
        <Container
          className="imagecontainer"
          style={{ backgroundImage: `url(${imageM})` }}
        >
          <h1 className="pictureTitle">The Newborn Registry</h1>
        </Container>
        <div className="wedding">
          <h1>Our Wish List Items</h1>
          <div className="wishListList">
            <WishListItems />
          </div>
          <div className="retaillinks">
            <h1>Retail Stores We're Registered At:</h1>
            <button className="btn btn-primary"></button>
            <button className="btn btn-primary"></button>
            <button className="btn btn-primary"></button>
          </div>
          <div className="messageBox">
            <div
              className="col-4 col-md-4 mb-3 p-1"
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
