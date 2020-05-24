import React, { useState } from "react";

const Context = React.createContext({});

export const CharactersContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);

  return (
    <Context.Provider value={{ characters, info, setInfo, setCharacters }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
