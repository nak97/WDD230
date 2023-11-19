// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=8dfd9f3c65a6ef4eaae72e5c410d646b&units=imperial';
let weather = {
  "apikey" : "8dfd9f3c65a6ef4eaae72e5c410d646b ",
  fetchWeather: function ( ){
    fetch(
      'https://api.openweathermap.org/data/2.5/forecast?lat=49.75&lon=6.64&cnt=3&appid=8dfd9f3c65a6ef4eaae72e5c410d646b&units=imperial'
      ).then((response) => response.json())
      .then((data) => this.displayWeather(data));
},
displayWeather: function(data){
// const{temp} = data.main ;
// const{icon, description}= data.weather[0];
console.log(description);
// document.querySelector('#temperature').innerText = temp + ' °F  ';
document.querySelector('#icon').src = 'https://openweathermap.org/img/wn/10n.png';
document.querySelector('#weather-description').innerText = ' - '+ description;

}
}
weather.fetchWeather()

