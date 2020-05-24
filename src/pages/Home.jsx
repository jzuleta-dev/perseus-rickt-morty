import React, { useState, useRef, useEffect, useCallback } from "react";
import { useCharacters } from "hooks/useCharacters";
import { CharacterGrid } from "../components/CharacterGrid";
import styled from "styled-components";
import { useLocation } from "wouter";
import Spinner from "components/Spinner";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
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
  font-size: 16px;
`;

const Button = styled.button`
  font-size: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
`;

export const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { loading, characters, setLoadNextPage } = useCharacters();
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });
  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };
  const handleQueryChange = (evt) => {
    setKeyword(evt.target.value);
  };

  const debounceHandleNextPage = useCallback(
    debounce(() => setLoadNextPage(true), 100),
    [setLoadNextPage]
  );

  useEffect(() => {
    if (isNearScreen) {
      setLoadNextPage(true);
    }
  }, [debounceHandleNextPage, isNearScreen, setLoadNextPage]);
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            onChange={handleQueryChange}
            value={keyword}
            placeholder={"Search by name..."}
          />
        </InputContainer>
        <Button>Search</Button>
      </Form>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <CharacterGrid pageCount characters={characters} />
          <div id="visor" ref={externalRef}></div>
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
