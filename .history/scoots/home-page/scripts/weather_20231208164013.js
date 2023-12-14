
const url =
"https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.94&cnt=6&appid=8dfd9f3c65a6ef4eaae72e5c410d646b&units=imperial";

async function weather(){
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  document.querySelector('#temp-tomorrow').innerHTML = data.list[5].main.temp
}

weather()

const currentUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.94&appid=8dfd9f3c65a6ef4eaae72e5c410d646b&units=imperial'
async function currentWeather(){
  const response = await fetch(currentUrl);
  var data = await response.json();
  console.log(data);


    document.querySelector('#current-temp').innerHTML = data.main.temp;
    document.querySelector('#humidity').innerHTML = data.main.humidity;
    document.querySelector('#current-description').innerHTML = data.weather[0].description;
    document.querySelector('#icon').src =`https://openweathermap.org/img/wn/04n.png`;
}
currentWeather()