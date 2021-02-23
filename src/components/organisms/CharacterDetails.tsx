import React from "react";
import { useParams } from "react-router-dom";

import {
  Character,
  Episode,
  useGetCharacterDetailsQuery,
} from "src/graphql/queries/getCharacterDetails.generated";

import ErrorAndLoadingHandler from "../molecules/ErrorAndLoadingHandler";
import SectionHeader from "../atoms/SectionHeader";
import SubSectionHeader from "../atoms/SubSectionHeader";
import InfoBlock from "../atoms/InfoBlock";
import LineCard from "../atoms/LineCard";
import LineCardGrid from "../molecules/LineCardGrig";

type RouteParams = {
  id: string;
};

const CharacterDetails: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const { data, loading, error } = useGetCharacterDetailsQuery({
    variables: { id },
  });

  if (data) {
    var {
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
  }

  return (
    <ErrorAndLoadingHandler error={error} loading={loading}>
      <div className="m-3">
        <SectionHeader>{name}</SectionHeader>
        <div className="grid grid-flow-row grid-cols-2 auto-rows-max gap-4">
          <img
            src={image as string | undefined}
            alt="character portrait"
            className="border-2 rounded-md justify-self-center"
          />
          <InfoBlock>
            <li>status: {status}</li>
            <li>species: {species}</li>
            <li>type: {type}</li>
            <li>gender: {gender}</li>
            <li>origin: {origin?.name}</li>
          </InfoBlock>
        </div>

        <div>
          <SubSectionHeader>episodes:</SubSectionHeader>
          <div className="my-3">
            <LineCard
              name={location?.name}
              type="location-details"
              id={location?.id}
            />
          </div>
        </div>

        <div>
          <SubSectionHeader>episodes:</SubSectionHeader>
          <LineCardGrid list={episode as Episode[]} type="episode-details" />
        </div>
      </div>
    </ErrorAndLoadingHandler>
  );
};

export default CharacterDetails;
