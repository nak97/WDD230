const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://openweathermap.org/data/2.5/?49.75&6.64units=imperialappid=8dfd9f3c65a6ef4eaae72e5c410d646b';

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

// function displayResults(data) {
//   currentTemp.innerHTML = `${data. }&deg;F`;
//   const iconsrc = `https://openweathermap.org/img/w/${ }. `;
//   let desc = data.weather[0].;
//   weatherIcon.setAttribute(' ',  );
//   weatherIcon.setAttribute(' ', );
//   captionDesc.textContent = `{desc} `;
// }