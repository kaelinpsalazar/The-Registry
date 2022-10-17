import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import imageK from "../assets/images/imageK.jpg";

import WishListItems from "../components/helpers/WishListItems";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_GIFTS, QUERY_MESSAGES } from "../utils/queries";
import GifterInput from "../components/helpers/GifterInput";
import MessageList from "../components/helpers/MessageList";
import StripeContainer from "../components/helpers/StripeContainer";
import "./styles/wedding.css";
import Container from "react-bootstrap/esm/Container";

function Wedding() {
  const { giftId } = useParams();
  const { loading, error, data } = useQuery(QUERY_GIFTS, {
    variables: { giftId: giftId },
  });
  const gifts = data?.gifts || [];
  console.log(gifts);

  const messageResult = useQuery(QUERY_MESSAGES);
  const messages = messageResult.data?.messages || [];

  const [showItem, setShowItem] = useState(false);

  return (
    <div>
      <div className="weddingBg">
        <Container
          className="imagecontainerW"
          style={{ backgroundImage: `url(${imageK})` }}
        >
          <h1 className="pictureTitleW">The Wedding Registry</h1>
        </Container>

        <div className="wedding">
          <h1>Our Wish List Items</h1>
          <div className="wishListList">
            <WishListItems />
          </div>

          <div className="retaillinks p-5 justify-content-around d-flex">
            <h1>Retail Stores We're Registered At:</h1>
            <a href="https://www.crateandbarrel.com/" target="_blank">
              <button className="btn btn-1">Crate & Barrel</button>
            </a>
            <a href="https://www.target.com/" target="_blank">
              <button className="btn btn-1">Target</button>
            </a>
            <a href="https://www.bedbathandbeyond.com/" target="_blank">
              <button className="btn btn-1">Bed Bath & Beyond</button>
            </a>
          </div>

          <div className="messageBox d-flex">
            <div className="col-6 col-md-6 mb-3">
              <GifterInput />
            </div>
            <div className="col-6 col-md-6 mb-3">
              <MessageList
                messages={messages}
                title="Messages for the Newlyweds"
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
              <button
                className="moneybtn btn btn-primary justify-content-center m-3"
                onClick={() => setShowItem(true)}
              >
                Donate $100 to The Registry!
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Wedding;
