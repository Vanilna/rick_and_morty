import React from "react";
import { Character } from "src/graphql/queries/getCharacters.generated";
import CharacterCard from "../atoms/CharacterCard";

type CharactersGridProps = {
  characters: Character[];
};

const CharactersGrid: React.FC<CharactersGridProps> = ({
  characters,
}): JSX.Element => (
  <div className="grid grid-flow-row grid-cols-5 auto-rows-auto gap-4 m-33">
    {characters &&
      characters.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
  </div>
);

export default CharactersGrid;
