import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";

import getCharacters from "../graphql/queries/getCharacters";

import Characters from "../components/pages/Characters";
import { CHARACTERS } from "../mockedData/characters";

describe("Characters page", () => {
  const mocks = [
    {
      request: {
        query: getCharacters,
        variables: {
          page: 1,
        },
      },
      result: CHARACTERS,
    },
  ];

  beforeEach(async () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Characters />
        </MockedProvider>
      </MemoryRouter>
    );

    await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  it("should render all characters from set", async () => {
    const characterElements = screen.getAllByTestId("character");
    const renderedElementsLength = characterElements.length;
    const expectedLength = mocks[0].result.data.characters.results.length;

    expect(renderedElementsLength).toBe(expectedLength);
  });
});
