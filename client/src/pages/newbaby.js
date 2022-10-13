import React from 'react'
import WishListItems from "../components/helpers/WishListItems";
import { WishListList } from "../components/helpers/WishListList";

import '../pages/styles/'

function Newbaby() {
  return (
    <div className="newbaby">
      <h1>Our Wish List Items</h1>
      <div className="wishListList">
        {WishListList.map((newbaby, idx) => {
          return (
            <WishListItems id={idx} name={newbaby.name} image={newbaby.image} />
          )
        })}
      </div>
    </div>
  );
}

export default Newbaby;