const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Gifter {
    _id: ID
    name: String
    email: String
  }
  type Message {
    _id: ID
    messageText: String
    messageAuthor: String
    createdAt: String
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

  type Query {
    gifters: [Gifter]
    gifter(name: String!): Gifter
    messages(name: String): [Message]
    message(messageId: ID!): Message
    recipients: [Recipient]
    recipient(name: String!): Recipient
    gifts: (product: String!): Gift
    gift: (giftId: ID!): Gift
  }

  type Mutation {
    addGift(
      product: String!
      price: Number!
      store: String!
      description: String!
      url: String!
    ): Gift
    removeGift(giftId: ID!): Gift
    addMessage(messageText: String!): Message
    removeMessage(messageId: ID!): Message
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
