//API keyurile nu trebuie stocate in format text, nu e sigur
const API_KEY = ""; // api key is loaded from apikey.js (ignored by git)

//construim linkurile(endpointuirle) serverelor de la care vom primi date
function getCurrentWeatherEndpoint(city) {
  //atunci cand folosim api putem obtine informatii extra prin query params
  //lang=ro => rezultatele vin in romana
  //units=metric => unitate de masura in celsius
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`
 
}