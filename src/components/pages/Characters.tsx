import React from "react";
import {
  Character,
  useGetCharactersQuery,
} from "src/graphql/queries/getCharacters.generated";
import usePageNavigation from "src/hooks/usePageNavigation";
import CharactersGrid from "../molecules/CharactersGrid";
import ErrorAndLoadingHandler from "../molecules/ErrorAndLoadingHandler";
import PageNavigation from "../molecules/PageNavigation";

const Characters: React.FC = (): JSX.Element => {
  const [page, setPage] = usePageNavigation();
  const { data, loading, error } = useGetCharactersQuery({
    variables: { page },
  });

  const charactersList = data?.characters?.results as Character[];
  const maxPage = data?.characters?.info?.pages;

  return (
    <ErrorAndLoadingHandler error={error} loading={loading}>
      <CharactersGrid characters={charactersList} />
      <PageNavigation handleClick={setPage} maxPage={maxPage} />
    </ErrorAndLoadingHandler>
  );
};

export default Characters;
