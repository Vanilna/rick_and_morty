import React from "react";
import { Link } from "react-router-dom";

type HomeScreenCardProps = {
  category: string;
};

const HomeScreenCard: React.FC<HomeScreenCardProps> = ({ category }) => {
  return (
    <div className="p-2.5 border-2 rounded-md bg-white">
      <Link to={`/${category}`}>
        <h3>{category.toUpperCase()}</h3>
      </Link>
    </div>
  );
};

export default HomeScreenCard;
