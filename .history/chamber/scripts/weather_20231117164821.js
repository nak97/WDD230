let weather = {
  "apikey": "8dfd9f3c65a6ef4eaae72e5c410d646b ",
  fetchWeather: function(){
    fetch(
      'https://api.openweathermap.org/data/2.5/forecast?lat=30.50&lon=-97.66&daily.dt&cnt=3&appid=8dfd9f3c65a6ef4eaae72e5c410d646b&units=imperial'
        ).then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  displayWeather:function(data){
  const{tempOne}= data.dt[0].temp;
  // const{description}= data.weather;
  console.log(tempOne);
  document.querySelector('#temperature-1').innerText =  tempOne + ' °F  ';

  }
}
