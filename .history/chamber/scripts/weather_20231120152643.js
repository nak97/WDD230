
      const url =' https://api.openweathermap.org/data/2.5/forecast?lat=30.50&lon=-97.66&daily.dt&cnt=3&appid=8dfd9f3c65a6ef4eaae72e5c410d646b&units=imperial';
      const cards = document.querySelector('#cards');
       
      async function getWeather() {
        const response = await fetch(url);
        const data = await response.json();
        console.table(data.list[1].main.temp);
        var temp = data.list[0].main.temp;
        var description = data.list[0].weather[0].description;
        var tempTwo = data.list[1].main.temp; 
        var descriptionTwo = data.list[1].weather[0].description;
        var tempThree = data.list[2].main.temp; 
        var descriptionThree = data.list[2].weather[0].description;



        document.querySelector('#temperature-one').innerText = `Temperature: ${temp}`;
        document.querySelector('#description-one').innerText = `description: ${description}`;
        document.querySelector('#temperature-two').innerText = `Temperature: ${tempTwo}`;
        document.querySelector('#description-two').innerText = `description: ${descriptionTwo}`;
        document.querySelector('#temperature-three').innerText = `Temperature: ${tempThree}`;
        document.querySelector('#description-three').innerText = `description: ${descriptionThree}`;
      }
      
      
       
  // data.list.forEach(element => {
        
  //     });

      getWeather();
       