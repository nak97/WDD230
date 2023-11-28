document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from the local JSON file
  fetch('./data/members.json')
      .then(response => response.json())
      .then(data => {
          // Display the data dynamically
          displayData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
});

function displayData(data) {
  // Access data properties and display them
  const jsonDataDiv = document.getElementById('json-data');
  jsonDataDiv.innerHTML = `
      <h2>User Information:</h2>
      <p>Name: ${data.name}</p>
      <p>Age: ${data.age}</p>
      <p>City: ${data.city}</p>
  `;
}



 