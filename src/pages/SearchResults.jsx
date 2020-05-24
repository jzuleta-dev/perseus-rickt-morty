import React from "react";
import { useCharacters } from "hooks/useCharacters";
import Spinner from "components/Spinner";
import { CharacterGrid } from "components/CharacterGrid";

export default function SearchResults({ params }) {
  console.log(params);
  const { keyword } = params;
  const { loading, characters } = useCharacters({ keyword });

  console.log(loading);

  return (
    <>{loading ? <Spinner /> : <CharacterGrid characters={characters} />}</>
  );
}
