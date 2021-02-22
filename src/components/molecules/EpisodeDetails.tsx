import React from "react";
import { useParams } from "react-router-dom";

import Loader from "../atoms/Loader";
import {
  Episode,
  Character,
  useGetEpisodeDetailsQuery,
} from "src/graphql/queries/getEpisodeDetails.generated";
import SubSectionHeader from "../atoms/SubSectionHeader";
import SectionHeader from "../atoms/SectionHeader";
import InfoBlock from "../atoms/InfoBlock";
import CharactersGrid from "./CharactersGrid";

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
  );
};

export default CharacterDetails;
