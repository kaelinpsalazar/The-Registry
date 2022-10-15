import React from "react";
import WishListItems from "../components/helpers/WishListItems";
import { WishListList } from "../components/helpers/WishListList";
import retaillinks from "../components/helpers/Retaillinks";
import givemoney from "../components/helpers/Givemoney";
import GifterInput from "../components/helpers/GifterInput";
import MessageList from "../components/helpers/MessageList";

import "./styles/graduation.css";

function Graduation() {
  return (
    <div>
      <div className="retaillinks">
        <h1>the Retail Stores we've Registered at</h1>
      </div>
      <div className="graduation">
        <h1>My Wish List Items</h1>
        <div className="wishListList">
          {WishListList.map((graduation, idx) => {
            return (
              <WishListItems
                id={idx}
                name={graduation.name}
                image={graduation.image}
              />
            );
          })}
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
        <h1>...or you can just give money</h1>
      </div>
    </div>
  );
}

export default Graduation;
