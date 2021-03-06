import React from "react";
import styled from "styled-components";
import "./App.css";
import { Header } from "pages/Header";
import { Home } from "pages/Home";
import { Detail } from "pages/Detail";
import SearchResults from "pages/SearchResults";
import { Route } from "wouter";
import { CharactersContextProvider } from "context/CharactersContext";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 1500px;
  background-color: #1f2329;
`;
function App() {
  return (
    <AppContainer>
      <Header />
      <CharactersContextProvider>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
        <Route path="/character/:id" component={Detail} />
      </CharactersContextProvider>
    </AppContainer>
  );
}

export default App;
