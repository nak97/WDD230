const element = document.getElementById("weather-info");
document.getElementById("temperature").innerHTML = "Temperature: 100 F";
document.getElementById("wind-speed").innerHTML = "wind speed: 10 mph";



const windChill = 35.74 + 0.6215 * 100 - 35.75 * (10**0.16)


document.getElementById("wind-chill").textContent = "Wind Chill "+ windChill;