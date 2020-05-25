import { characterListMock } from "../testUtils";
import { useCharacters } from "hooks/useCharacters";
import CharactersContext from "context/CharactersContext";
import React from "react";
import { renderHook } from "@testing-library/react-hooks";

describe("useCharacter hook", () => {
  const makeWrapper = () => ({ children }) => {
    const characters = characterListMock.results;
    const info = characterListMock.info;
    const setInfo = jest.fn();
    const setCharacters = jest.fn();
    return (
      <CharactersContext.Provider
        value={{ characters, info, setInfo, setCharacters }}
      >
        {children}
      </CharactersContext.Provider>
    );
  };

  beforeAll(() => {
    const mockSuccessResponse = { characterListMock };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  afterAll(() => {
    global.fetch.mockRestore();
  });

  it("shold make api call to fetch data for the characters", async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useCharacters("rick"),
      {
        wrapper: makeWrapper(),
      }
    );
    await waitForNextUpdate();
    expect(fetch).toHaveBeenCalled();
    expect(result.current.characters).toEqual(characterListMock.results);
  });
});
