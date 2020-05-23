import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 600px;
  height: 220px;
  margin: 15px;
  border-radius: 50px;
  background-color: #3c3e44;
`;

const Info = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Img = styled.img``;

export const CharCard = ({ name, status, origin, avatar }) => (
  <Card>
    <Img src={avatar} alt="character-avatar" />
    <Info>
      <div>{name}</div>
      <div>{status}</div>
      <div>{origin}</div>
    </Info>
  </Card>
);

CharCard.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
