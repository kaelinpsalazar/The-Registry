import React from 'react'
import WishListItems from '../components/helpers/WishListItems'
import { WishListList } from '../components/helpers/WishListList'
import retaillinks from '../components/helpers/Retaillinks'
import givemoney from '../components/helpers/Givemoney'

import './styles/wedding.css';

function Wedding() {
  return (
    <div>
      <div className="retaillinks">
        <h1>the Retail Stores we've Registered at</h1>
      </div>
      <div className="wedding">
        <h1>Our Wish List Items</h1>
        <div className="wishListList">
          {WishListList.map((wedding, idx) => {
            return (
              <WishListItems
                id={idx}
                name={wedding.name}
                image={wedding.image}
              />
            )
          })}
        </div>
      </div>
      <div className="givemoney">
        <h1>...or you can just give money</h1>
      </div>
    </div>
  )
}

export default Wedding
