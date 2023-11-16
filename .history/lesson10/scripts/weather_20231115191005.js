const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=8dfd9f3c65a6ef4eaae72e5c410d646b&units=imperial';

async function apiFetch(){
  try{
    const response = await fetch(url);
    if (response.ok) {
      const data =await response.json();
      console.log(data);
    } else {
      throw Error(await response.text());
  }
} catch (error) {
  console.log(error);
  }
}
apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.temp }&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data}.png `;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src ',iconsrc );
  weatherIcon.setAttribute('alt ','' );
  captionDesc.textContent = `${desc} `;
}

