import { useContext } from "react";
import CharactersContext from "context/CharactersContext";

const useGlobalCharacters = () => {
  return useContext(CharactersContext).characters;
};

export default useGlobalCharacters;
