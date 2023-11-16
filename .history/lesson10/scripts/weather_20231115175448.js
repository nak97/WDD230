const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=49.8787&lon=7.0161&zoom=10';

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
  console.log(error);}
}



apiFetch();