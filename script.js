let now = new Date();
console.log(now);
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = String(now.getHours()).padStart(2, "0");
let minutes = String(now.getMinutes()).padStart(2, "0");

let dayTime = document.querySelector("#current-time");
dayTime.innerHTML = `${day}, ${hour}:${minutes}`;

//function convertFahrenheit(event) {
//event.preventDefault();
//let temperatureElement = document.querySelector("#temperature");
//let temperature = temperatureElement.innerHTML;
//temperature = Number(temperature);
//temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
//}

//let fahrenheitLink = document.querySelector("#fahrenheit-link");
//fahrenheitLink.addEventListener("click", convertFahrenheit);

//function convertCelsius(event) {
//event.preventDefault();
// let temperatureElement = document.querySelector("#temperature");

//temperatureElement.innerHTML = 20;
//}

//let celsiusLink = document.querySelector("#celsius-link");
//celsiusLink.addEventListener("click", convertCelsius);
function showCurrentLocation(position) {
  //console.log(position);
  //let latitude = position.coords.latitude;
  //let longitude = position.coords.longitude;
  let apiKey = "9798d0efdc49b9137ba9478ff4af211b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", getCurrentLocation);

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentLocation);
}

function searchLocation(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let city = cityInput.value;
  search(city);
}
function search(city) {
  let apiKey = "9798d0efdc49b9137ba9478ff4af211b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
}
let searchCity = document.querySelector("#search-city");
searchCity.addEventListener("submit", searchLocation);

function showTemp(response) {
  console.log(response.data);
  console.log(response.data.name);
  let cityName = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = `${temperature}`;
  let locationName = document.querySelector("#city-name");
  locationName.innerHTML = `${cityName}`;
}
search("Paris");
