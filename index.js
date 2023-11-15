// API KEY: 7c8958fc7f7500faa7682a12efe7c0a8

// api.openweathermap.org/data/2.5/forecast?q={cityName}&appid={7c8958fc7f7500faa7682a12efe7c0a8}

const getWeatherBtn = document.getElementById("get-weather");

const apiKey = "7c8958fc7f7500faa7682a12efe7c0a8";

async function getWeather() {
  const city = document.getElementById("city-name").value;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  const data = await response.json();
  console.log(data);
  console.log(data.name);
  console.log(data.weather[0].main);
  console.log(data.weather[0].description);

  let locationEl = document.getElementById("location-el");
  locationEl.innerHTML = `
  <p>Location: ${data.name}</p>
  `;

  let weatherEl = document.getElementById("weather-el");
  weatherEl.innerHTML = `
  <p>Weather now: ${data.weather[0].main}</p>
  `;

  let tempEl = document.getElementById("temp-el");
  tempEl.innerHTML = `
  <p>Temperature now: ${data.main.temp}°C</p>
  `;
}

getWeatherBtn.addEventListener("click", function () {
  getWeather();
});
