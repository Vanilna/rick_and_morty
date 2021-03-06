import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

export type Character = {
  __typename?: "Character";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  species?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["String"]>;
  origin?: Maybe<Location>;
  location?: Maybe<Location>;
  image?: Maybe<Scalars["String"]>;
  episode?: Maybe<Array<Maybe<Episode>>>;
  created?: Maybe<Scalars["String"]>;
};

export type Characters = {
  __typename?: "Characters";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: "Episode";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  air_date?: Maybe<Scalars["String"]>;
  episode?: Maybe<Scalars["String"]>;
  characters?: Maybe<Array<Maybe<Character>>>;
  created?: Maybe<Scalars["String"]>;
};

export type Episodes = {
  __typename?: "Episodes";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  name?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  species?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["String"]>;
};

export type FilterEpisode = {
  name?: Maybe<Scalars["String"]>;
  episode?: Maybe<Scalars["String"]>;
};

export type FilterLocation = {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  dimension?: Maybe<Scalars["String"]>;
};

export type Info = {
  __typename?: "Info";
  count?: Maybe<Scalars["Int"]>;
  pages?: Maybe<Scalars["Int"]>;
  next?: Maybe<Scalars["Int"]>;
  prev?: Maybe<Scalars["Int"]>;
};

export type Location = {
  __typename?: "Location";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  dimension?: Maybe<Scalars["String"]>;
  residents?: Maybe<Array<Maybe<Character>>>;
  created?: Maybe<Scalars["String"]>;
};

export type Locations = {
  __typename?: "Locations";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: "Query";
  character?: Maybe<Character>;
  characters?: Maybe<Characters>;
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  location?: Maybe<Location>;
  locations?: Maybe<Locations>;
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
  episode?: Maybe<Episode>;
  episodes?: Maybe<Episodes>;
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
};

export type QueryCharacterArgs = {
  id: Scalars["ID"];
};

export type QueryCharactersArgs = {
  page?: Maybe<Scalars["Int"]>;
  filter?: Maybe<FilterCharacter>;
};

export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars["ID"]>;
};

export type QueryLocationArgs = {
  id: Scalars["ID"];
};

export type QueryLocationsArgs = {
  page?: Maybe<Scalars["Int"]>;
  filter?: Maybe<FilterLocation>;
};

export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars["ID"]>;
};

export type QueryEpisodeArgs = {
  id: Scalars["ID"];
};

export type QueryEpisodesArgs = {
  page?: Maybe<Scalars["Int"]>;
  filter?: Maybe<FilterEpisode>;
};

export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars["ID"]>;
};

export type GetCharacterDetailsQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetCharacterDetailsQuery = { __typename?: "Query" } & {
  character?: Maybe<
    { __typename?: "Character" } & Pick<
      Character,
      | "id"
      | "name"
      | "status"
      | "species"
      | "type"
      | "gender"
      | "image"
      | "created"
    > & {
        origin?: Maybe<
          { __typename?: "Location" } & Pick<Location, "id" | "name">
        >;
        location?: Maybe<
          { __typename?: "Location" } & Pick<Location, "id" | "name">
        >;
        episode?: Maybe<
          Array<
            Maybe<{ __typename?: "Episode" } & Pick<Episode, "id" | "name">>
          >
        >;
      }
  >;
};

export const GetCharacterDetailsDocument = gql`
  query getCharacterDetails($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
      }
      location {
        id
        name
      }
      image
      episode {
        id
        name
      }
      created
    }
  }
`;

/**
 * __useGetCharacterDetailsQuery__
 *
 * To run a query within a React component, call `useGetCharacterDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCharacterDetailsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCharacterDetailsQuery,
    GetCharacterDetailsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCharacterDetailsQuery,
    GetCharacterDetailsQueryVariables
  >(GetCharacterDetailsDocument, options);
}
export function useGetCharacterDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCharacterDetailsQuery,
    GetCharacterDetailsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCharacterDetailsQuery,
    GetCharacterDetailsQueryVariables
  >(GetCharacterDetailsDocument, options);
}
export type GetCharacterDetailsQueryHookResult = ReturnType<
  typeof useGetCharacterDetailsQuery
>;
export type GetCharacterDetailsLazyQueryHookResult = ReturnType<
  typeof useGetCharacterDetailsLazyQuery
>;
export type GetCharacterDetailsQueryResult = Apollo.QueryResult<
  GetCharacterDetailsQuery,
  GetCharacterDetailsQueryVariables
>;
