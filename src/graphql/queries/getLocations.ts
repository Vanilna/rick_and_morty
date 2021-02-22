import { gql } from "@apollo/client";

const getLocations = gql`
  query getLocations($page: Int) {
    locations(page: $page) {
      info {
        pages
      }
      results {
        id
        name
      }
    }
  }
`;

export default getLocations;
