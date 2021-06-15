//import React from "react";

const urlFetch =
  "https://rickandmortyapi.com/documentation/#get-all-characters";

const GetApiData = () => {
  return fetch(urlFetch)
    .then((response) => response.json())
    .then((data) => {
      const CleanData = data.results.map((user) => {
        return {
          id: user.id,
          name: user.name,
          image: user.image,
          species: user.species,
          status: user.status,
        };
      });
      return CleanData;
    });
};

export default GetApiData;
