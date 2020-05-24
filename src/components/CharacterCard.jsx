import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 100px;
  margin: 10px;
  border-radius: 15px;
  background-color: #3c3e44;
  overflow: hidden;
`;

const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: white;
  padding-left: 16px;
  flex-direction: column;
`;

const Img = styled.img`
  height: 100%;
`;

export const CharCard = ({ name, status, origin, avatar, species }) => (
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
);

CharCard.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};
