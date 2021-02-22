import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";

import getLocations from "src/graphql/queries/getLocations";

import { LOCATIONS } from "src/mockedData/locations";
import Locations from "src/components/pages/Locations";

describe("Characters page", () => {
  const mocks = [
    {
      request: {
        query: getLocations,
        variables: {
          page: 1,
        },
      },
      result: LOCATIONS,
    },
  ];

  beforeEach(async () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Locations />
        </MockedProvider>
      </MemoryRouter>
    );

    await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  it("should render all characters from set", async () => {
    const characterElements = screen.getAllByTestId("card");
    const renderedElementsLength = characterElements.length;
    const expectedLength = mocks[0].result.data.locations.results.length;

    expect(renderedElementsLength).toBe(expectedLength);
  });
});
