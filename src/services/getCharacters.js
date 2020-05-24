const fromApiResponseToCharacters = (apiResponse) => {
  if (apiResponse) {
    return apiResponse;
  }

  return [];
};

export default function getCharacters({ keyword }) {
  const apiURL = `https://rickandmortyapi.com/api/character/?name=${keyword}`;
  console.log(apiURL);
  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToCharacters);
}
