import React, { useState, useCallback } from "react";
import { fetchAllCharacters } from "../hooks/characters.hooks";
import { CharacterGrid } from "../components/CharacterGrid";
import styled from "styled-components";
import debounce from "lodash/debounce";
import isEmpty from "lodash/isEmpty";
import axios from "axios";
const Header = styled.div``;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Main = () => {
  const [queryName, setQueryName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { characters, error, isLoading } = fetchAllCharacters();
  const fetchQueryCharacters = async (query) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${query}`
      );
      console.log(response.data.results);
      setSearchResults(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const debouncedSearch = useCallback(
    debounce((query) => fetchQueryCharacters(query), 1000),
    []
  );
  const handleQueryChange = (e) => {
    setQueryName(e.target.value);
    if (e.target.value === "") {
      setSearchResults([]);
    } else {
      debouncedSearch(e.target.value);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log(error);
  }

  return (
    <Container>
      <Header>
        <input
          onChange={handleQueryChange}
          value={queryName}
          placeholder={"Search by name..."}
        />
      </Header>
      <CharacterGrid
        pageCount
        characterList={isEmpty(searchResults) ? characters : searchResults}
      />
    </Container>
  );
};
