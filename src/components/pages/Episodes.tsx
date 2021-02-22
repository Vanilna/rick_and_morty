import React from "react";

import Loader from "../atoms/Loader";
import { useGetEpisodesQuery } from "src/graphql/queries/getEpisodes.generated";
import { Episode } from "src/graphql/queries/getCharacters.generated";
import LineCardGrid from "../molecules/LineCardGrig";
import PageNavigation from "../molecules/PageNavigation";
import usePageNavigation from "src/hooks/usePageNavigation";

const Episodes: React.FC = (): JSX.Element => {
  const [page, setPage] = usePageNavigation();
  const { data, loading, error } = useGetEpisodesQuery({
    variables: { page },
  });

  const episodesList = data?.episodes?.results as Episode[];
  const maxPage = data?.episodes?.info?.pages;

  return (
    <>
      {!loading && !error && (
        <>
          <LineCardGrid list={episodesList} type="episode-details" />
          <PageNavigation handleClick={setPage} maxPage={maxPage} />
        </>
      )}
      {loading && <Loader />}
      {error && <p>Sorry, something went wrong, please try again later</p>}
    </>
  );
};

export default Episodes;
