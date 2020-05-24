import React, { useEffect, useState } from "react";
import { CharacterCard } from "components/CharacterCard";
import useGlobalCharacters from "hooks/useGlobalCharacters";
import styled from "styled-components";
import {
  getCharacterById,
  getRecommendedCharacters,
} from "services/getCharacters";
import Spinner from "components/Spinner";
import { CharacterGrid } from "components/CharacterGrid";
const RecommendedContainer = styled.div`
  /* padding: 16px; */
`;
const Title = styled.div`
  color: white;
  font-size: 40px;
  margin: 16px 0;
`;

const Subtitle = styled(Title)`
  font-size: 30px;
`;

const DetailContainer = styled.div`
  padding: 16px;
`;

export const Detail = ({ params }) => {
  const [character, setCharacter] = useState(
    useGlobalCharacters().find((char) => char.id === Number(params.id))
  );
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const getCharById = async () => {
      const characterResponse = await getCharacterById(params.id);
      setCharacter(characterResponse);
    };
    if (!character || Number(params.id) !== character.id) {
      getCharById();
    }
  }, [character, params.id]);

  useEffect(() => {
    const getRecommendedListBySpecies = async () => {
      const recommendedListResponse = await getRecommendedCharacters(
        character.species
      );
      setRecommended(recommendedListResponse.results);
    };
    if (character) getRecommendedListBySpecies();
  }, [character]);
  return character === undefined || recommended === [] ? (
    <Spinner />
  ) : (
    <DetailContainer>
      <Title>{character.name}</Title>
      <CharacterCard
        id={character.id}
        name={character.name}
        status={character.status}
        origin={character.origin.name}
        avatar={character.image}
        species={character.species}
      />
      <RecommendedContainer>
        <Subtitle>Recommended</Subtitle>
        <CharacterGrid characters={recommended} />
      </RecommendedContainer>
    </DetailContainer>
  );
};
