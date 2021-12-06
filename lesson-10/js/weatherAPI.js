const url = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=648a12c71259cde04182773e260843c2 ";

const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var today = new Date();
var time = today.getHours();
console.log(time);

function toF(kelvinTemp) {
   return Math.round(9 / 5 * (kelvinTemp - 273.15) + 32)
}

fetch(url)
   .then((response) => {
      return response.json();
   })
   .then((jsonObjct) => {
      console.table(jsonObjct);
      todaysWeather(jsonObjct);
   });

function todaysWeather(jsonObjct) {
   let weatherData = jsonObjct.list[0];

   let dt = new Date(weatherData.dt_txt);
   console.log(dt);

   document.getElementById('currently').textContent = weatherData.weather[0].main;
   document.getElementById('current-temp').textContent = toF(weatherData.main.temp);
   document.getElementById('humidity').textContent = weatherData.main.humidity;
   document.getElementById('wind-speed').textContent = weatherData.wind.speed;
}

function fiveDayForecast(jsonObjct) {
   
}