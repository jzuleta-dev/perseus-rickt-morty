/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import axios from "axios";

export function fetchAllCharacters() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCount, setPageCount] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character/"
      );
      console.log(response.data.results);

      setCharacters(response.data.results);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    console.log("fetch");
    fetchData();
  }, []);

  return { characters, error, isLoading };
}
