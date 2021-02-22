import { gql } from "@apollo/client";

const getLocationDetails = gql`
  query getLocationDetails($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        image
      }
    }
  }
`;

export default getLocationDetails;
