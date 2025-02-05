"use strict";

function pokedex(pokeUrl) {
  const request = new XMLHttpRequest();
  request.open("GET", pokeUrl);
  request.send();

  request.addEventListener("load", function () {
    const { abilities } = JSON.parse(this.responseText);
    const url = abilities[0]?.ability?.url;

    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.addEventListener("load", function () {
      const { effect_entries } = JSON.parse(this.responseText);
      const result = effect_entries.find(
        ({ language }) => language.name === "en"
      );
      console.log(result?.effect);
    });
  });
}

pokedex("https://pokeapi.co/api/v2/pokemon/ditto");
pokedex("https://pokeapi.co/api/v2/pokemon/caterpie");
