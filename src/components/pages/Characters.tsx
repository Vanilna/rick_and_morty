import React from "react";
import {
  Character,
  useGetCharactersQuery,
} from "src/graphql/queries/getCharacters.generated";
import Loader from "../atoms/Loader";
import CharacterCard from "../atoms/CharacterCard";

const Characters: React.FC = (): JSX.Element => {
  const { data, loading, error } = useGetCharactersQuery({
    variables: { page: 2 },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Sorry, something went wrong, please try again later</p>;
  }

  const charactersList = data?.characters?.results as Character[];

  return (
    <div className="grid grid-flow-col grid-cols-5 grid-rows-4 gap-4">
      {charactersList &&
        charactersList.map((char) => (
          <CharacterCard character={char} key={char.id} />
        ))}
    </div>
  );
};

export default Characters;
