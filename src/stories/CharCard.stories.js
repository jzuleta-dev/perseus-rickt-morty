import React from "react";

import { CharCard } from "../components/CharacterCard.jsx";
export default {
  title: "Character card",
  component: CharCard,
};
const PoopybuttholeMock = {
  id: 244,
  name: "Mr. Poopybutthole",
  status: "Alive",
  species: "Poopybutthole",
  type: "",
  gender: "Male",
  origin: {
    name: "unknown",
    url: "",
  },
  location: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/244.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/15",
    "https://rickandmortyapi.com/api/episode/21",
    "https://rickandmortyapi.com/api/episode/29",
    "https://rickandmortyapi.com/api/episode/30",
    "https://rickandmortyapi.com/api/episode/31",
    "https://rickandmortyapi.com/api/episode/34",
  ],
  url: "https://rickandmortyapi.com/api/character/244",
  created: "2017-12-30T18:03:48.054Z",
};

export const Card = () => (
  <CharCard
    name={PoopybuttholeMock.name}
    status={PoopybuttholeMock.status}
    origin={PoopybuttholeMock.origin.name}
    avatar={PoopybuttholeMock.image}
  />
);
