import React from "react";
import { useParams } from "react-router-dom";

import Loader from "../atoms/Loader";
import {
  Episode,
  useGetEpisodeDetailsQuery,
} from "src/graphql/queries/getEpisodeDetails.generated";
import CharacterCard from "../atoms/CharacterCard";

type RouteParams = {
  id: string;
};

const CharacterDetails: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const { data, loading, error } = useGetEpisodeDetailsQuery({
    variables: { id },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Sorry, something went wrong, please try again later</p>;
  }

  const { name, air_date, episode, characters } = data?.episode as Episode;

  return (
    <div>
      <h3 className="text-3xl text-center font-bold text-white">{name}</h3>

      <ul className="text-1xl font-semibold p-2.5 border-2 rounded-md bg-white m-3">
        <li>Air date: {air_date}</li>
        <li>episode: {episode}</li>
      </ul>

      <div>
        <h4 className="text-2xl m-3 font-bold text-white">characters:</h4>
        <div className="grid grid-flow-col grid-cols-5 grid-rows-4 gap-4 m-3">
          {characters &&
            characters.map((character) => (
              <>
                {character && (
                  <CharacterCard character={character} key={character.id} />
                )}
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
