import React from 'react'
import WishListItems from '../components/helpers/WishListItems'
import { WishListList } from '../components/helpers/WishListList'
import retaillinks from '../components/helpers/Retaillinks'
import givemoney from '../components/helpers/Givemoney'

import './styles/newbaby.css'

function Newbaby() {
  return (
    <div>
      <div className="retaillinks">
        <h1>the Retail Stores we've Registered at</h1>
      </div>
      <div className="newbaby">
        <h1>Our Wish List Items</h1>
        <div className="wishListList">
          {WishListList.map((newbaby, idx) => {
            return (
              <WishListItems
                id={idx}
                name={newbaby.name}
                image={newbaby.image}
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

export default Newbaby
