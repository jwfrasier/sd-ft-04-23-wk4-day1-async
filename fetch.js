async function getPokemon() {
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon");
  const json = await pokemon.json();
  const body = document.querySelector("body");
  for (const poke of json.results) {
    const name = document.createElement("h1");
    const url = document.createElement("a");
    name.innerHTML = poke.name;
    url.innerHTML = poke.name;
    url.href = poke.url;
    body.append(name, url);
  }
}
getPokemon();
