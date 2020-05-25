const apiURL = "https://rickandmortyapi.com/api/character/";
const fromApiResponseToCharacters = (apiResponse) => {
  if (apiResponse) {
    return apiResponse;
  }

  return [];
};

export const getCharacters = ({ keyword }) => {
  return fetch(`${apiURL}?name=${keyword}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then(fromApiResponseToCharacters);
};

export const getNextPage = (info) => {
  return fetch(info.next, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then(fromApiResponseToCharacters);
};

export const getCharacterById = (id) => {
  return fetch(`${apiURL}${id}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then(fromApiResponseToCharacters);
};

export const getRecommendedCharacters = (species = "human") => {
  return fetch(`${apiURL}?species=${species}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then(fromApiResponseToCharacters);
};
