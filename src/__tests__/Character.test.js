import React from "react";
import { CharacterCard } from "components/CharacterCard";
import renderer from "react-test-renderer";

const characterMock = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  species: "Human",
};

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
