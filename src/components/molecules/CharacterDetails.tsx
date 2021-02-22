import React from "react";
import { useParams } from "react-router-dom";

import {
  Character,
  useGetCharacterDetailsQuery,
} from "src/graphql/queries/getCharacterDetails.generated";
import LineCard from "../atoms/LineCard";
import Loader from "../atoms/Loader";

type RouteParams = {
  id: string;
};

const CharacterDetails: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const { data, loading, error } = useGetCharacterDetailsQuery({
    variables: { id },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Sorry, something went wrong, please try again later</p>;
  }

  const {
    name,
    image,
    status,
    species,
    type,
    gender,
    origin,
    episode,
    location,
  } = data?.character as Character;

  return (
    <div className="m-3">
      <h3 className="text-3xl text-center font-bold text-white">{name}</h3>
      <div className="grid grid-flow-row grid-cols-2 auto-rows-max gap-4">
        <img
          src={image as string | undefined}
          alt="character portrait"
          className="border-2 rounded-md justify-self-center"
        />
        <ul className="text-1xl font-semibold p-2.5 border-2 rounded-md bg-white">
          <li>status: {status}</li>
          <li>species: {species}</li>
          <li>type: {type}</li>
          <li>gender: {gender}</li>
          <li>origin: {origin?.name}</li>
        </ul>
      </div>

      <div>
        <h4 className="text-2xl font-bold text-white py-4">episodes:</h4>
        <LineCard
          name={location?.name}
          type="location-details"
          id={location?.id}
        />
      </div>

      <div>
        <h4 className="text-2xl font-bold text-white py-4">episodes:</h4>
        <div className="grid grid-cols-2 grid-rows-10 gap-4">
          {episode &&
            episode.map((episodeItem) => (
              <>
                {episodeItem && (
                  <LineCard
                    name={episodeItem.name}
                    id={episodeItem.id}
                    type="episode-details"
                    key={episodeItem.id}
                  />
                )}
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
