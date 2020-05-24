import React from "react";
import styled from "styled-components";
import "./App.css";
import { Header } from "pages/Header";
import { Home } from "pages/Home";
import SearchResults from "pages/SearchResults";
import { Route } from "wouter";
import { CharactersContextProvider } from "context/CharactersContext";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #1f2329;
`;
function App() {
  return (
    <AppContainer>
      <Header />
      <CharactersContextProvider>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
      </CharactersContextProvider>
    </AppContainer>
  );
}

export default App;
