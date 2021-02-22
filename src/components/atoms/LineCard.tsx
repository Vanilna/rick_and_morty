import React from "react";
import { Link } from "react-router-dom";
import { Episode } from "src/graphql/queries/getEpisodes.generated";

type LineCardProps = {
  episode: Episode;
};

const LineCard: React.FC<LineCardProps> = ({ episode: { id, name } }) => {
  if (!name || !id) {
    return null;
  }
  return (
    <Link
      to={`/episode-details/${id}`}
      key={id}
      className="text-1xl font-semibold p-2.5 border-2 rounded-md bg-white w-full"
    >
      {name}
    </Link>
  );
};

export default LineCard;
