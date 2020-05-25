import { characterListMock } from "../testUtils";
import { useCharacters } from "hooks/useCharacters";
import CharactersContext from "context/CharactersContext";
import React from "react";
import { renderHook } from "@testing-library/react-hooks";
xdescribe("useCharacter hook", () => {
  const makeWrapper = () => ({ children }) => (
    <CharactersContext.Provider
      value={{ characters, info, setInfo, setCharacters }}
    >
      {children}
    </CharactersContext.Provider>
  );
  beforeAll(() => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            defaultValue: characterListMock,
          }),
      })
    );
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
      { wrapper: makeWrapper() }
    );
    await waitForNextUpdate();
    expect(fetch).toHaveBeenCalled();
    console.log(result.current[0]);
  });
});
