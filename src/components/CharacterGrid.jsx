import React from "react";

import styled from "styled-components";
import { CharCard } from "./CharacterCard";
import ReactPaginate from "react-paginate";

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
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CharacterGrid = ({ characterList }) => (
  <Container>
    <GridContainer>
      {characterList.map((character) => (
        <CharCard
          name={character.name}
          status={character.status}
          origin={character.origin.name}
          avatar={character.image}
        />
      ))}
    </GridContainer>

    <ReactPaginate
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={30}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={() => console.log("page change")}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
    />
  </Container>
);
