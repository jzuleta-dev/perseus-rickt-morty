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

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
`;
const Button = styled.button`
  font-size: 16px;
`;

const InputContainer = styled.div``;

const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;
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
    console.log(path);
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
      <FormContainer>
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
      </FormContainer>
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
