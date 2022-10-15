// import { gql } from "@apollo/client";

// export const QUERY_GIFT = gql`
//   query gift($_id: ID!) {
//     gift(_id: $_id) {
//       _id
//       product
//       price
//       store
//       description
//       url
//       imageUrl
//     }
//   }
// `;

<<<<<<< HEAD:client/src/components/utils/queries.js
// export const QUERY_ALLGIFTS = gql`
//   query gifts {
//     gifts {
//       _id
//       product
//     }
//   }
// `;
=======
export const QUERY_ALLGIFTS = gql`
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
>>>>>>> 781ac533bbf902eb661a2a23f4f2431845e171ad:client/src/utils/queries.js
