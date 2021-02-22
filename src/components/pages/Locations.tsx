import React from "react";

import {
  useGetLocationsQuery,
  Episode,
} from "src/graphql/queries/getLocations.generated";

import usePageNavigation from "src/hooks/usePageNavigation";

import ErrorAndLoadingHandler from "../molecules/ErrorAndLoadingHandler";
import LineCardGrid from "../molecules/LineCardGrig";
import PageNavigation from "../molecules/PageNavigation";

const Locations: React.FC = (): JSX.Element => {
  const [page, setPage] = usePageNavigation();
  const { data, loading, error } = useGetLocationsQuery({
    variables: { page },
  });

  const locationsList = data?.locations?.results as Episode[];
  const maxPage = data?.locations?.info?.pages;

  return (
    <ErrorAndLoadingHandler error={error} loading={loading}>
      <LineCardGrid list={locationsList} type="location-details" />
      <PageNavigation handleClick={setPage} maxPage={maxPage} />
    </ErrorAndLoadingHandler>
  );
};

export default Locations;
