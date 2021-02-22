import React from "react";

import Loader from "../atoms/Loader";
import { useGetLocationsQuery } from "src/graphql/queries/getLocations.generated";
import { Episode } from "src/graphql/queries/getCharacters.generated";
import LineCardGrid from "../molecules/LineCardGrig";
import usePageNavigation from "src/hooks/usePageNavigation";
import PageNavigation from "../molecules/PageNavigation";

const Locations: React.FC = (): JSX.Element => {
  const [page, setPage] = usePageNavigation();
  const { data, loading, error } = useGetLocationsQuery({
    variables: { page },
  });

  const locationsList = data?.locations?.results as Episode[];
  const maxPage = data?.locations?.info?.pages;

  return (
    <>
      {!loading && !error && (
        <>
          <LineCardGrid list={locationsList} type="location-details" />
          <PageNavigation handleClick={setPage} maxPage={maxPage} />
        </>
      )}
      {loading && <Loader />}
      {error && <p>Sorry, something went wrong, please try again later</p>}
    </>
  );
};

export default Locations;
