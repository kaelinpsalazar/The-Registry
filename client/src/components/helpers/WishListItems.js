import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_GIFTS } from "../../utils/queries";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const WishListItems = () => {
  const navigate = useNavigate();
  const { loading, data } = useQuery(QUERY_GIFTS);
  const gifts = data?.gifts || [];
  console.log(gifts);
  return (
    <div>
      <Container>
        <Row>
          {gifts &&
            gifts.map((gift) => (
              <div
                className="wishListItems"
                onClick={() => {
                  navigate("/wedding/" + gift._id);
                }}
              >
                <h3>{gift.product}</h3>
                <div
                  style={{ backgroundImage: `url(${gift.imageUrl})` }}
                  className="bgImage"
                />
                <h4>Price: ${gift.price}</h4>
                <h4>Store: {gift.store}</h4>
                <p>{gift.description}</p>
                <button>
                  <a href={gift.url} className="btn btn primary">
                    Product Link
                  </a>
                </button>
              </div>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default WishListItems;
