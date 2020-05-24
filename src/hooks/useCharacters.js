/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect, useContext } from "react";
import CharactersContext from "context/CharactersContext";
import { getCharacters, getNextPage } from "services/getCharacters";

export const useCharacters = ({ keyword } = { keyword: "" }) => {
  const [loading, setLoading] = useState(false);

  const [loadNextPage, setLoadNextPage] = useState(false);

  const { characters, setCharacters, info, setInfo } = useContext(
    CharactersContext
  );

  useEffect(() => {
    setLoading(true);
    getCharacters({ keyword }).then((response) => {
      setCharacters(response.results);
      setInfo(response.info);
      setLoading(false);
    });
  }, [keyword, setCharacters, setInfo]);

  useEffect(() => {
    if (!loadNextPage) return;

    getNextPage(info).then((nextCharacters) => {
      setCharacters((prevCharacters) =>
        prevCharacters.concat(nextCharacters.results)
      );

      setLoadNextPage(false);
      setInfo(nextCharacters.info);
    });
  }, [loadNextPage, info, setCharacters, setInfo]);

  return { loading, setLoadNextPage, characters, info };
};
