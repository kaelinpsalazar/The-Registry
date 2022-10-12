const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Gifter {
    _id: ID
    name: String
    email: String
  }
  type Recipient {
    _id: ID
    name: String
    email: String
    password: String
  }
  type Gift {
    _id: ID
    product: String
    price: Number
    store: String
    description: String
  }
`;

module.exports = typeDefs;
