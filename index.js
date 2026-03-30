const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");
const currentYear =  document.querySelector(".year");

// Daca nu avem oras salvat in localStorage, salvam orasul default, adica Bucuresti.
if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

// Actualizam orasul afisat pe ecran.
currentCityTag.innerHTML = currentCity;

// Afisam vremea curenta si predictia pe 5 zile.
displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);
//afisam dinamic anul in footer
  const year = new Date().getFullYear();
currentYear.innerHTML = `${year}`;