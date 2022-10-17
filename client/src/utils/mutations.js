import { gql } from "@apollo/client";

export const ADD_MESSAGE = gql`
  mutation addMessage($messageText: String!) {
    addMessage(messageText: $messageText) {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;

export const LOGIN_RECIPIENT = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      recipient {
        _id
        name
      }
    }
  }
`;

export const ADD_REGISTER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;
