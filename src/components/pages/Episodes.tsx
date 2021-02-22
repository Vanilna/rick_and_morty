import React from "react";

import {
  useGetEpisodesQuery,
  Episode,
} from "src/graphql/queries/getEpisodes.generated";

import usePageNavigation from "src/hooks/usePageNavigation";

import ErrorAndLoadingHandler from "../molecules/ErrorAndLoadingHandler";
import LineCardGrid from "../molecules/LineCardGrig";
import PageNavigation from "../molecules/PageNavigation";

const Episodes: React.FC = (): JSX.Element => {
  const [page, setPage] = usePageNavigation();
  const { data, loading, error } = useGetEpisodesQuery({
    variables: { page },
  });

  const episodesList = data?.episodes?.results as Episode[];
  const maxPage = data?.episodes?.info?.pages;

  return (
    <ErrorAndLoadingHandler error={error} loading={loading}>
      <LineCardGrid list={episodesList} type="episode-details" />
      <PageNavigation handleClick={setPage} maxPage={maxPage} />
    </ErrorAndLoadingHandler>
  );
};

export default Episodes;
