import React from "react";
import styled from "styled-components";
import { Link } from "wouter";
const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  max-height: 30vh;
  justify-content: center;
  background-color: rgb(245, 245, 245);
  cursor: pointer;
`;

export const Header = () => (
  <HeaderContent>
    <Link to="/">
      <img src={require("../assets/rickmorty.png")} alt="logo" />
    </Link>
  </HeaderContent>
);
