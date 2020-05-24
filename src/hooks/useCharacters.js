/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect, useContext } from "react";
import CharactersContext from "context/CharactersContext";
import getCharacters from "services/getCharacters";

export function useCharacters({ keyword } = { keyword: "" }) {
  const [loading, setLoading] = useState(false);
  // const [loadingNextPage, setLoadingNextPage] = useState(false);

  const { characters, setCharacters } = useContext(CharactersContext);

  useEffect(() => {
    setLoading(true);

    getCharacters({ keyword }).then((characters) => {
      console.log("getCharacters", characters);
      setCharacters(characters.results);
      setLoading(false);
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keyword, setCharacters]);

  return { loading, characters };
}
