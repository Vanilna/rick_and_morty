import React from "react";
import { useParams } from "react-router-dom";

import {
  useGetLocationDetailsQuery,
  Location as LocationType,
  Character,
} from "src/graphql/queries/getLocationDetails.generated";

import ErrorAndLoadingHandler from "../molecules/ErrorAndLoadingHandler";
import SectionHeader from "../atoms/SectionHeader";
import SubSectionHeader from "../atoms/SubSectionHeader";
import InfoBlock from "../atoms/InfoBlock";
import CharactersGrid from "../molecules/CharactersGrid";

type RouteParams = {
  id: string;
};

const LocationDetails: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const { data, loading, error } = useGetLocationDetailsQuery({
    variables: { id },
  });

  if (data) {
    var { name, type, dimension, residents } = data?.location as LocationType;
  }

  return (
    <ErrorAndLoadingHandler error={error} loading={loading}>
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
    </ErrorAndLoadingHandler>
  );
};

export default LocationDetails;
