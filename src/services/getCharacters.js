const apiURL = "https://rickandmortyapi.com/api/character/";
const fromApiResponseToCharacters = (apiResponse) => {
  if (apiResponse) {
    return apiResponse;
  }

  return [];
};

export const getCharacters = ({ keyword }) => {
  return fetch(`${apiURL}?name=${keyword}`)
    .then((res) => res.json())
    .then(fromApiResponseToCharacters);
};

export const getNextPage = (info) => {
  return fetch(info.next)
    .then((res) => res.json())
    .then(fromApiResponseToCharacters);
};

export const getCharacterById = (id) => {
  return fetch(`${apiURL}${id}`)
    .then((res) => res.json())
    .then(fromApiResponseToCharacters);
};

export const getRecommendedCharacters = (species = "human") => {
  return fetch(`${apiURL}?species=${species}`)
    .then((res) => res.json())
    .then(fromApiResponseToCharacters);
};
