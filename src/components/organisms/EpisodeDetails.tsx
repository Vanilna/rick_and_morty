import React from "react";
import { useParams } from "react-router-dom";

import {
  Episode,
  Character,
  useGetEpisodeDetailsQuery,
} from "src/graphql/queries/getEpisodeDetails.generated";

import ErrorAndLoadingHandler from "../molecules/ErrorAndLoadingHandler";
import SubSectionHeader from "../atoms/SubSectionHeader";
import SectionHeader from "../atoms/SectionHeader";
import InfoBlock from "../atoms/InfoBlock";
import CharactersGrid from "../molecules/CharactersGrid";

type RouteParams = {
  id: string;
};

const CharacterDetails: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const { data, loading, error } = useGetEpisodeDetailsQuery({
    variables: { id },
  });

  if (data) {
    var { name, air_date, episode, characters } = data?.episode as Episode;
  }

  return (
    <ErrorAndLoadingHandler error={error} loading={loading}>
      <div>
        <SectionHeader>{name}</SectionHeader>

        <InfoBlock>
          <li>Air date: {air_date}</li>
          <li>episode: {episode}</li>
        </InfoBlock>

        <div>
          <SubSectionHeader>characters:</SubSectionHeader>
          <CharactersGrid characters={characters as Character[]} />
        </div>
      </div>
    </ErrorAndLoadingHandler>
  );
};

export default CharacterDetails;
