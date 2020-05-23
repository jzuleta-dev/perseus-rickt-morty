import React from "react";
import styled from "styled-components";
import "./App.css";
import { Header } from "./containers/Header";
import { Main } from "./containers/Main";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #1f2329;
`;
function App() {
  return (
    <AppContainer>
      <Header />
      <Main />
    </AppContainer>
  );
}

export default App;
