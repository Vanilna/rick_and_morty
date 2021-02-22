import React from "react";
import { useParams } from "react-router-dom";

import {
  Character,
  useGetCharacterDetailsQuery,
} from "src/graphql/queries/getCharacterDetails.generated";

type RouteParams = {
  id: string;
};

const CharacterDetails: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const { data, loading, error } = useGetCharacterDetailsQuery({
    variables: { id },
  });

  if (loading || error) {
    return <p>wrong or not jet</p>;
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
    <div>
      <h3>{name}</h3>
      <ul>
        <img src={image as string | undefined} alt="character portrait" />
        <li>status: {status}</li>
        <li>species: {species}</li>
        <li>type: {type}</li>
        <li>gender: {gender}</li>
        <li>origin: {origin?.name}</li>
        <li>location: {location?.name}</li>
        <li>
          episode:
          <ul>
            {episode?.map((ep) => (
              <li key={ep?.id}>{ep?.name}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default CharacterDetails;
