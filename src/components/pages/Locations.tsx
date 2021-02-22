import React, { useState } from "react";

import Loader from "../atoms/Loader";
import LineCard from "../atoms/LineCard";
import { useGetLocationsQuery } from "src/graphql/queries/getLocations.generated";
import { Episode } from "src/graphql/queries/getCharacters.generated";

const Locations: React.FC = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useGetLocationsQuery({
    variables: { page },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Sorry, something went wrong, please try again later</p>;
  }

  const locationsList = data?.locations?.results as Episode[];
  const maxPage = data?.locations?.info?.pages;

  const handleClick = (direction: string): void => {
    if (!maxPage) return;
    setPage((prev) => {
      const next = direction === "forward" ? prev + 1 : prev - 1;
      return next <= maxPage && next > 0 ? next : prev;
    });
  };

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-10 gap-4 m-3">
        {locationsList &&
          locationsList.map((location) => (
            <LineCard episode={location} key={location.id} />
          ))}
      </div>
      <button
        onClick={() => handleClick("back")}
        className="p-1 m-3 bg-white border-2 rounded-md"
      >
        prev
      </button>
      <button
        onClick={() => handleClick("forward")}
        className="p-1 m-3 bg-white border-2 rounded-md"
      >
        next
      </button>
    </>
  );
};

export default Locations;
