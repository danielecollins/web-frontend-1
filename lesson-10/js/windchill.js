let t = document.getElementById('current-temp').innerHTML;
let s = document.getElementById('wind-speed').innerHTML;

if (t <= 50 && s > 4.8)
    document.getElementById('wind-chill').innerHTML = Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16));
else
    document.getElementById('wind-chill').innerHTML = "N/A";