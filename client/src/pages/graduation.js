import React from 'react';
import WishListItems from "../components/helpers/WishListItems";
import { WishListList } from "../components/helpers/WishListList";

import './styles/Graduation.css';

function Graduation() {
  return (
    <div className="graduation">
      <h1>My Wish List Items</h1>
      <div className="wishListList">
        {WishListList.map((graduation, idx) => {
          return (
            <WishListItems id={idx} name={graduation.name} image={graduation.image} />
          )
        })}
      </div>
    </div>
  );
}

export default Graduation;