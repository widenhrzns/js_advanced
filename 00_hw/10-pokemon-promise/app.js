"use strict";

function getData(url, errorMessage) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`[status: ${response.status}] ${errorMessage}`);
    }
    return response.json();
  });
}

function pokedex(url) {
  getData(url, "Can not get a pokemon")
    .then(({ abilities }) => {
      const zeroAbilityUrl = abilities?.at(0)?.ability?.url;
      return getData(zeroAbilityUrl, "Can not get zero ability effect");
    })
    .then(({ effect_entries }) => {
      const engEffectEntry = effect_entries.find(
        ({ language }) => language.name === "en"
      );
      console.log(engEffectEntry?.effect);
    })
    .catch((error) => console.log(error));
}

/// Вывод
setTimeout(() => {
  console.log("--------------------");
  pokedex("https://pokeapi.co/api/v2/pokemon/ditto");
  pokedex("https://pokeapi.co/api/v2/pokemon/caterpie");
}, 1);

/// Проверка ошибок
setTimeout(() => {
  console.log("--------------------");
  pokedex("https://pokeapi.co/api/v2/pokemon/null");
  pokedex("https://pokeapi.co/api/v2/pokemon/");
}, 100);
