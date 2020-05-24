import React from "react";

import styled from "styled-components";
import { CharCard } from "components/CharacterCard";

const Container = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const GridContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CharacterGrid = ({ characters }) => (
  <Container>
    <GridContainer>
      {characters.map((character) => (
        <CharCard
          key={character.id}
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
