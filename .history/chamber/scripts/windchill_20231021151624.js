const element = document.getElementById("weather-info");
document.getElementById("temperature").innerHTML = "Temperature: 100 F";
document.getElementById("wind-speed").innerHTML = "10 MPH";



const windChill = 35.74 + 0.6215 * 100 - 35.75 * (10**0.16)
// let T = (35.74 + 0.6215) *100
// let V = -35.75 * 10

document.getElementById("wind-chill").textContent = windchill;


