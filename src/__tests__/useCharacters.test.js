import { characterListMock } from "../testUtils";
import { useCharacters } from "hooks/useCharacters";
import CharactersContext from "context/CharactersContext";
import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import serviceCharacters from "services/getCharacters";

jest.mock("services/getCharacters", () => {
  const characterListMock = require("../testUtils");
  return {
    getCharacters: jest
      .fn()
      .mockImplementation(() => Promise.resolve(characterListMock)),
  };
});

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

  it("shold make api call to fetch data for the characters", async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useCharacters({ keyword: "rick" }),
      {
        wrapper: makeWrapper(),
      }
    );
    await waitForNextUpdate();
    expect(serviceCharacters.getCharacters).toHaveBeenCalledWith({
      keyword: "rick",
    });
    expect(result.current.loading).toBeFalsy();
    expect(result.current.characters).toEqual(characterListMock.results);
    expect(result.current.info).toEqual(characterListMock.info);
  });
});
