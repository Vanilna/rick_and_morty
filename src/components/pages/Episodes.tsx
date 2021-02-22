import React, { useState } from "react";

import Loader from "../atoms/Loader";
import LineCard from "../atoms/LineCard";
import { useGetEpisodesQuery } from "src/graphql/queries/getEpisodes.generated";
import { Episode } from "src/graphql/queries/getCharacters.generated";

const Episodes: React.FC = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useGetEpisodesQuery({
    variables: { page },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Sorry, something went wrong, please try again later</p>;
  }

  const episodesList = data?.episodes?.results as Episode[];
  const maxPage = data?.episodes?.info?.pages;

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
        {episodesList &&
          episodesList.map((episode) => (
            <LineCard episode={episode} key={episode.id} />
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

export default Episodes;
