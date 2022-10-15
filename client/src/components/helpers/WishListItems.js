import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_GIFT, QUERY_ALLGIFTS } from "../../utils/queries";

const WishListItems = ({ gift }) => {
  const navigate = useNavigate();
  const { loading, data } = useQuery(QUERY_ALLGIFTS);
  const gifts = data?.gifts || [];
  console.log(gifts);
  return (
    <div>
      {gifts &&
        gifts.map((gift) => (
          <div
            className="wishListItems"
            onClick={() => {
              navigate("/wedding/" + gift._id);
            }}
          >
            <h3>{gift.product}</h3>
            {/* <div
              style={{ backgroundImage: `url(${gift.imageUrl})` }}
              className="bgImage"
            /> */}
            <h4>Price: ${gift.price}</h4>
            <h4>Store: {gift.store}</h4>
            <img src={gift.imageUrl} alt='image of gift' />
            <p>{gift.description}</p>
            <button>
              <a href={gift.url} className="btn btn primary" target="_blank">
                Product Link
              </a>
            </button>
          </div>
        ))}
    </div>
  );
};

export default WishListItems;
