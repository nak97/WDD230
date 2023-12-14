let weather = {
  "apikey" : "8dfd9f3c65a6ef4eaae72e5c410d646b ",
  fetchWeather: function ( ){
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.94&appid=8dfd9f3c65a6ef4eaae72e5c410d646b&units=imperial'
      ).then((response) => response.json())
      .then((data) => this.displayWeather(data));
},
displayWeather: function(data){
const{temp} = data.main ;
const{icon, description}= data.weather[0];
// console.log(icon,temp,description);
document.querySelector('#current-weather').innerText = temp + ' °F  ';
document.querySelector('#icon').src = 'https://openweathermap.org/img/wn/10n.png';
document.querySelector('#current-description').innerText = ' - '+ description;

}
}
weather.fetchWeather()