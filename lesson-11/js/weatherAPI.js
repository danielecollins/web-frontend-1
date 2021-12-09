const url = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=648a12c71259cde04182773e260843c2 ";

function toF(kelvinTemp) {
   return Math.round(9 / 5 * (kelvinTemp - 273.15) + 32)
}

fetch(url)
   .then((response) => {
      return response.json();
   })
   .then((jsonObjct) => {
      // console.table(jsonObjct);
      todaysWeather(jsonObjct);
      fiveDayForecast(jsonObjct);
   });

function todaysWeather(jsonObjct) {
   let weatherData = jsonObjct.list[0];

   document.getElementById('currently').textContent = weatherData.weather[0].main;
   document.getElementById('current-temp').textContent = toF(weatherData.main.temp);
   document.getElementById('humidity').textContent = weatherData.main.humidity;
   document.getElementById('wind-speed').textContent = weatherData.wind.speed;
}

function fiveDayForecast(jsonObjct) {
   const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
   const forecast = jsonObjct.list;
   const size =  forecast.length;

   let row = 1;

   for (let i = 0; i < size; i++) {
      if (forecast[i].dt_txt.includes('18:00:00')) {
         let forecastDate = new Date(forecast[i].dt_txt);

         document.getElementById('day-'+row).textContent = dayOfWeek[forecastDate.getDay()];
         document.getElementById('temp-'+row).textContent = toF(forecast[i].main.temp);
         document.getElementById('icon-'+row).src = "https://openweathermap.org/img/w/" + forecast[i].weather[0].icon + ".png";

         row++;
      }
   }
}