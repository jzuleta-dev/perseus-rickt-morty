import React from "react";
import renderer from "react-test-renderer";
import { CharacterGrid } from "components/CharacterGrid";
import { characterListMock } from "../testUtils";

test("CharacterGrid with data", () => {
  const component = renderer.create(
    <CharacterGrid characters={characterListMock.results} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
