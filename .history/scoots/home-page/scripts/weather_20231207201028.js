


// const url =' https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.94&appid=8dfd9f3c65a6ef4eaae72e5c410d646b&units=imperial';
// const cards = document.querySelector('#cards');
 
// async function getWeather() {
//   const response = await fetch(url);
//   const data = await response.json();
//   // console.table(data.list[1].main.temp);
//   var temp = main.temp;
//  ;



//   document.querySelector('#temperature-one').innerText = `Temperature: ${temp}`;
//   document.querySelector('#description-one').innerText = `description: ${description}`;
//   document.querySelector('#temperature-two').innerText = `Temperature: ${tempTwo}`;
//   document.querySelector('#description-two').innerText = `description: ${descriptionTwo}`;
//   document.querySelector('#temperature-three').innerText = `Temperature: ${tempThree}`;
//   document.querySelector('#description-three').innerText = `description: ${descriptionThree}`;
// }


 
// // data.list.forEach(element => {
  
// //     });

// getWeather();

// const request = fetch('https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.94&appid=8dfd9f3c65a6ef4eaae72e5c410d646b&units=imperial')

// console.log(request)

// const getWeatherData = function(weather){
//   fetch('https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.94&appid=8dfd9f3c65a6ef4eaae72e5c410d646b&units=imperial')
//   .then(function(response){
//     return response.json()
//   }) 
//   .then( function(data){ 
//     console.log(data)})
//     renderWeather(data[0]);
// };
// getWeatherData()



const getWeatherData = function(weather){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.94&appid=8dfd9f3c65a6ef4eaae72e5c410d646b&units=imperial/${weather}`)
  .then((response)=> response.json())
  .then(data => console.log(data))



  document.querrySelector('#current-temp').innerHTML = data.main.temp
};
getWeatherData();



