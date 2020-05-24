import { useContext } from "react";
import CharactersContext from "context/CharactersContext";

const useGlobalGifs = () => {
  return useContext(CharactersContext).characters;
};

export default useGlobalGifs;
