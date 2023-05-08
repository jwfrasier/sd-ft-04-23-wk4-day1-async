const findWeather = document.querySelector("#findweather");
findWeather.addEventListener("click", getPokemon);
async function getPokemon() {
  const pokemon = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=29.7604&lon=-95.3698&appid="
  );
  const body = document.querySelector("body");

  const json = await pokemon.json();
  console.log(json);
  const name = document.createElement("h1");
  const temp = document.createElement("h1");
  name.innerHTML = json.name;
  temp.innerHTML = json.main.temp + " f";
  body.append(name, temp);
  console.log(name);
}
