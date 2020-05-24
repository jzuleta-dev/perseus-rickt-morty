import React from "react";

import styled from "styled-components";
import { CharacterCard } from "components/CharacterCard";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const GridContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CharacterGrid = ({ characters }) => {
  return (
    <Container>
      <GridContainer>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            origin={character.origin.name}
            avatar={character.image}
            species={character.species}
          />
        ))}
      </GridContainer>
    </Container>
  );
};
