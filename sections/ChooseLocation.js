// selectam elementele de interes
const bucharest = document.querySelector(".dropdown-menu .bucharest")
const timisoara = document.querySelector(".dropdown-menu .timisoara")
const oradea = document.querySelector(".dropdown-menu .oradea")

function updateCurrentCity(city) {
  // selectam elementul in care afisam orasul curent si ii adaugam continut
  const currentCity = document.querySelector(".current-city")
  currentCity.innerHTML = city
}

function updateWeather(city) {
  // actualizam orasul din localStorage
  localStorage.setItem("city", city);
  // actualizam orasul afisat pe ecram
  updateCurrentCity(city)
  // reafisam vremea curenta
  displayCurrentWeather(city)
  displayWeatherForecast(city);
}

//adaugam event listeneri pe butoane
bucharest.addEventListener("click", function () {
  updateWeather("București")
})

timisoara.addEventListener("click", function () {
  updateWeather("Timișoara")
})

oradea.addEventListener("click", function () {
  updateWeather("Oradea")
})