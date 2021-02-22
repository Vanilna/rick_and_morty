import { gql } from "@apollo/client";

const getEpisodes = gql`
  query getEpisodes($page: Int) {
    episodes(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
      }
    }
  }
`;

export default getEpisodes;
