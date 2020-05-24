import { useContext } from "react";
import CharactersContext from "context/CharactersContext";

export default function useGlobalGifs() {
  console.log(useContext(CharactersContext).characters);
  return useContext(CharactersContext).characters;
}
