const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Gifter {
    _id: ID
    name: String
    email: String
    messages: [Message]!
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
    _id: ID!
    product: String
    price: Int
    store: String
    description: String
    url: String
    imageUrl: String
  }
  type Registry {
    _id: ID
    name: String
    imageUrl: String
    gifts: [Gift]!
  }
  type Auth {
    token: ID!
    recipient: Recipient
  }
  type Query {
    gifters: [Gifter]!
    gifter(name: String!): Gifter
    messages: [Message]!
    message(messageId: ID!): Message
    recipients: [Recipient]!
    recipient(name: String!): Recipient
    gifts: [Gift]!
    gift(giftId: ID!): Gift
  }
  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addGift(
      product: String!
      price: Int!
      store: String!
      description: String!
      url: String!
      imageUrl: String!
      registryId: ID!
    ): Gift
    removeGift(giftId: ID!): Gift
    addMessage(messageText: String!, messageAuthor: String!): Message
    removeMessage(messageId: ID!): Message
    addRecipient(name: String!, email: String!, password: String!): Auth
  }
`;
module.exports = typeDefs;
