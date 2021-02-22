import React from "react";
import { useParams } from "react-router-dom";

import Loader from "../atoms/Loader";
import CharacterCard from "../atoms/CharacterCard";
import {
  useGetLocationDetailsQuery,
  Location as LocationType,
} from "src/graphql/queries/getLocationDetails.generated";

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
      <h3 className="text-3xl text-center font-bold text-white">{name}</h3>

      <ul className="text-1xl font-semibold p-2.5 border-2 rounded-md bg-white m-3">
        <li>Type: {type}</li>
        <li>Dimension: {dimension}</li>
      </ul>

      <div>
        <h4 className="text-2xl m-3 font-bold text-white">characters:</h4>
        <div className="grid grid-flow-row grid-cols-5 auto-rows-auto gap-4 m-3">
          {residents &&
            residents.map((resident) => (
              <>
                {resident && (
                  <CharacterCard character={resident} key={resident.id} />
                )}
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
