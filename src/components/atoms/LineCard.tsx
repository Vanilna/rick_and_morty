import React from "react";
import { Link } from "react-router-dom";

type LineCardProps = {
  name: string | undefined | null;
  id: string | undefined | null;
  type: string;
};

const LineCard: React.FC<LineCardProps> = ({ id, name, type }) => {
  if (!name || !id) {
    return null;
  }
  return (
    <Link
      to={`/${type}/${id}`}
      key={id}
      className="text-1xl font-semibold p-2.5 border-2 rounded-md bg-white w-full"
    >
      {name}
    </Link>
  );
};

export default LineCard;
