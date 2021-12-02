const url = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=648a12c71259cde04182773e260843c2";

const dofW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

fetch(url)
   .then((response) => {
      return response.json();
   })
   .then((jsonObjct) => {
      console.table(jsonObjct);
   });

