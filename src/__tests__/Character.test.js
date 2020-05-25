import React from "react";
import { CharacterCard } from "components/CharacterCard";
import renderer from "react-test-renderer";
import { characterMock } from "testUtils";

test("Character with data", () => {
  const component = renderer.create(
    <CharacterCard
      id={characterMock.id}
      name={characterMock.name}
      status={characterMock.status}
      origin={characterMock.origin.name}
      avatar={characterMock.image}
      species={characterMock.species}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
