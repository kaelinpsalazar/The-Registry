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
            gifts.slice(0, 6).map((gift) => (
              <div
                className="wishListItems"
                onClick={() => {
                  navigate("/wedding/" + gift._id);
                }}
              >
                <h3>{gift.product}</h3>
                <h4>Price: ${gift.price}</h4>
                <h4>Store: {gift.store}</h4>
                <img
                  src={gift.imageUrl}
                  alt="image of gift"
                  width="200px"
                  border="2px solid black"
                />
                <p>{gift.description}</p>
                <button>
                  <a
                    href={gift.url}
                    className="btn btn primary"
                    target="_blank"
                  >
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
