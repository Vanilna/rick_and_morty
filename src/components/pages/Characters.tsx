import React from "react";
import {
  Character,
  useGetCharactersQuery,
} from "src/graphql/queries/getCharacters.generated";
import usePageNavigation from "src/hooks/usePageNavigation";
import Loader from "../atoms/Loader";
import CharactersGrid from "../molecules/CharactersGrid";
import PageNavigation from "../molecules/PageNavigation";

const Characters: React.FC = (): JSX.Element => {
  const [page, setPage] = usePageNavigation();
  const { data, loading, error } = useGetCharactersQuery({
    variables: { page },
  });

  const charactersList = data?.characters?.results as Character[];
  const maxPage = data?.characters?.info?.pages;

  return (
    <>
      {!loading && !error && (
        <>
          <CharactersGrid characters={charactersList} />
          <PageNavigation handleClick={setPage} maxPage={maxPage} />
        </>
      )}
      {loading && <Loader />}
      {error && <p>Sorry, something went wrong, please try again later</p>}
    </>
  );
};

export default Characters;
