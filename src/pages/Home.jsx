import React, { useState } from "react";
import { useCharacters } from "hooks/useCharacters";
import { CharacterGrid } from "../components/CharacterGrid";
import styled from "styled-components";
import { useLocation } from "wouter";
import Spinner from "components/Spinner";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 100%;
  overflow-y: scroll;
`;
const InputContainer = styled.div``;

const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
`;

export const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { loading, characters } = useCharacters();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };
  const handleQueryChange = (evt) => {
    setKeyword(evt.target.value);
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <button>Search</button>
        <InputContainer>
          <Input
            onChange={handleQueryChange}
            value={keyword}
            placeholder={"Search by name..."}
          />
        </InputContainer>
      </form>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <CharacterGrid pageCount characters={characters} />
        </>
      )}
    </Container>
  );
};

// const [queryName, setQueryName] = useState("");
// const [searchResults, setSearchResults] = useState([]);
// const { characters, error, isLoading } = fetchAllCharacters();
// const fetchQueryCharacters = async (query) => {
//   try {
//     const response = await axios.get(
//       `https://rickandmortyapi.com/api/character/?name=${query}`
//     );
//     console.log(response.data.results);
//     setSearchResults(response.data.results);
//   } catch (error) {
//     console.log(error);
//   }
// };
// const debouncedSearch = useCallback(
//   debounce((query) => fetchQueryCharacters(query), 1000),
//   []
// );
// const handleQueryChange = (e) => {
//   setQueryName(e.target.value);
//   if (e.target.value === "") {
//     setSearchResults([]);
//   } else {
//     debouncedSearch(e.target.value);
//   }
// };

// if (isLoading) {
//   return <div>Loading...</div>;
// }
// if (error) {
//   console.log(error);
// }
