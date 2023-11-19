let weather = {
  "apikey": " ",
  fetchWeather: function(){
    fetch(
      '  '
    ).then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  displayWeather:function(data){
    
  }
}
