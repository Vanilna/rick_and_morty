import React from "react";
import { useParams } from "react-router-dom";

import Loader from "../atoms/Loader";
import SubSectionHeader from "../atoms/SubSectionHeader";
import {
  useGetLocationDetailsQuery,
  Location as LocationType,
  Character,
} from "src/graphql/queries/getLocationDetails.generated";
import SectionHeader from "../atoms/SectionHeader";
import InfoBlock from "../atoms/InfoBlock";
import CharactersGrid from "./CharactersGrid";

type RouteParams = {
  id: string;
};

const LocationDetails: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const { data, loading, error } = useGetLocationDetailsQuery({
    variables: { id },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Sorry, something went wrong, please try again later</p>;
  }

  const { name, type, dimension, residents } = data?.location as LocationType;

  return (
    <div>
      <SectionHeader>{name}</SectionHeader>

      <InfoBlock>
        <li>Type: {type}</li>
        <li>Dimension: {dimension}</li>
      </InfoBlock>

      <div>
        <SubSectionHeader>characters:</SubSectionHeader>
        <CharactersGrid characters={residents as Character[]} />
      </div>
    </div>
  );
};

export default LocationDetails;
