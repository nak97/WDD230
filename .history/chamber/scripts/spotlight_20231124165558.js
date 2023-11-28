document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from the local JSON file
  fetch('./data/members.json')
      .then(response => response.json())
      .then(data => {
          // Display the data dynamically
          displayData(data);
      })
     
});

function displayData(data) {
  // Access data properties and display them
  const jsonDataDiv = document.getElementById('#spotlight');
  jsonDataDiv.innerHTML = `
      <h2>Company:</h2>
      <p>Name: ${data.name}</p>
    
  `;
}



 