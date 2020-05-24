import React from "react";
import { Link } from "wouter";

import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  height: 100px;
  margin: 10px;
  border-radius: 15px;
  background-color: white;
  overflow: hidden;
  cursor: pointer;
`;

const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: #3c3e44;
  padding-left: 16px;
  flex-direction: column;
`;

const Img = styled.img`
  height: 100%;
`;

export const CharacterCard = ({
  id,
  name,
  status,
  origin,
  avatar,
  species,
}) => {
  return (
    <Link to={`/character/${id}`}>
      <Card>
        <Img src={avatar} alt="character-avatar" />
        <Info>
          <div>
            <b>Name:</b> {name}
          </div>
          <div>
            <b>Status:</b> {status}
          </div>
          <div>
            <b>Origin:</b> {origin}
          </div>
          <div>
            <b>Species:</b> {species}
          </div>
        </Info>
      </Card>
    </Link>
  );
};
