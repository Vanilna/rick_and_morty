import React from "react";

import {
  Episode,
  Location as LocationType,
} from "src/graphql/queries/getLocationDetails.generated";

import LineCard from "../atoms/LineCard";

type LineCardGridProps = {
  list: LocationType[] | Episode[];
  type: string;
};

export type ListItem = {
  name: string | undefined | null;
  id: string | undefined | null;
};

const LineCardGrid: React.FC<LineCardGridProps> = ({
  list,
  type,
}): JSX.Element => {
  const listNormalized = list as ListItem[];
  return (
    <div className="grid grid-cols-2 grid-rows-10 gap-4">
      {listNormalized &&
        listNormalized.map((listItem) => (
          <LineCard
            name={listItem.name}
            id={listItem.id}
            type={type}
            key={listItem.id}
          />
        ))}
    </div>
  );
};

export default LineCardGrid;
