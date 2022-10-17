import React from "react";
import imageL from "../assets/images/imageL.jpg";

import WishListItems from "../components/helpers/WishListItems";
import { useQuery } from "@apollo/client";
import { QUERY_GIFTS, QUERY_MESSAGES } from "../utils/queries";
import GifterInput from "../components/helpers/GifterInput";
import MessageList from "../components/helpers/MessageList";
import StripeContainer from "../components/helpers/StripeContainer";
import { useState } from "react";

import "./styles/graduation.css";
import Container from "react-bootstrap/esm/Container";

function Graduation() {
  const [showItem, setShowItem] = useState(false);
  const { loading, error, data } = useQuery(QUERY_GIFTS, QUERY_MESSAGES);
  const gifts = data?.gifts || [];

  const messageResult = useQuery(QUERY_MESSAGES);
  const messages = messageResult.data?.messages || [];
  console.log(gifts);

  return (
    <div>
      <div className="graduationBg">
        <Container
          className="imagecontainerG"
          style={{ backgroundImage: `url(${imageL})` }}
        >
          <h1 className="pictureTitleG">The Graduation Registry</h1>
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
            <div className="message col-6 col-md-6 mb-3">
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
export default Graduation;
