import React from "react";
import { Link } from "react-router-dom";

import { Character } from "src/graphql/queries/getCharacters.generated";

type CharacterCardProps = {
  character: Character;
};

const CharacterCard: React.FC<CharacterCardProps> = ({
  character: { id, name, image },
}) => {
  if (!name || !image) {
    return null;
  }

  return (
    <div className="p-2.5 border-2 rounded-md bg-white" data-testid="character">
      <Link to={`/character-details/${id}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </Link>
    </div>
  );
};

export default CharacterCard;
