import { gql } from "@apollo/client";

const getEpisodeDetails = gql`
  query getEpisodeDetails($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        image
      }
      created
    }
  }
`;

export default getEpisodeDetails;
