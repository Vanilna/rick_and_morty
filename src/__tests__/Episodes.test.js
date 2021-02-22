import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";

import getEpisodes from "src/graphql/queries/getEpisodes";

import { EPISODES } from "src/mockedData/episodes";
import Episodes from "src/components/pages/Episodes";

describe("Characters page", () => {
  const mocks = [
    {
      request: {
        query: getEpisodes,
        variables: {
          page: 1,
        },
      },
      result: EPISODES,
    },
  ];

  beforeEach(async () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Episodes />
        </MockedProvider>
      </MemoryRouter>
    );

    await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  it("should render all characters from set", async () => {
    const characterElements = screen.getAllByTestId("card");
    const renderedElementsLength = characterElements.length;
    const expectedLength = mocks[0].result.data.episodes.results.length;

    expect(renderedElementsLength).toBe(expectedLength);
  });
});
