import React, { useRef, useCallback, useEffect } from "react";
import { useCharacters } from "hooks/useCharacters";
import Spinner from "components/Spinner";
import { CharacterGrid } from "components/CharacterGrid";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 100%;
  overflow-y: scroll;
`;
export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, characters, setLoadNextPage } = useCharacters({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => setLoadNextPage(true, 200)),
    setLoadNextPage
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);
  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <CharacterGrid characters={characters} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
    </Container>
  );
}
