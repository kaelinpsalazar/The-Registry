import { gql } from "@apollo/client";

export const QUERY_GIFT = gql`
  query gift($_id: ID!) {
    gift(_id: $_id) {
      _id
      product
      price
      store
      description
      url
      imageUrl
    }
  }
`;

export const QUERY_GIFTS = gql`
  query gifts {
    gifts {
      _id
      product
      price
      store
      description
      url
      imageUrl
    }
  }
`;

export const QUERY_GIFTER = gql`
  query gifter($name: String!) {
    user(name: $name) {
      _id
      name
      email
      messages {
        _id
        messageText
        createdAt
      }
    }
  }
`;

export const QUERY_MESSAGES = gql`
  query messages {
    messages {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;

export const QUERY_RECIPIENT = gql`
  query recipient($name: String!) {
    recipient(name: $name) {
      _id
      name
      email
      gifts {
        _id
      }
    }
  }
`;
