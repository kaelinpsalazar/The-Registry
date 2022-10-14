import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_GIFT, QUERY_ALLGIFTS } from "../utils/queries";

function WishListItems({ product, price, store, description, url, imageUrl }) {
  const navigate = useNavigate();
  const { loading, data } = useQuery(QUERY_ALLGIFTS);
  const gifts = data?.gifts || [];
  console.log(gifts);

  return (
    <div
      className="wishListItems"
      onClick={() => {
        navigate("/wedding/" + gifts._id);
      }}
    >
      {/* <div
        style={{ backgroundImage: `url(${gifts.imageUrl})` }}
        className="bgImage"
      />
      <h1>{product}</h1>
      <h4>Price: ${price}</h4>
      <h4>Store: {store}</h4>
      <p>{description}</p>
      <a href={url} class="btn btn primary">
        Product Link
      </a> */}
    </div>
  );
}

export default WishListItems;
