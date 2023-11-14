const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');
 
async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.prophets);
  displayProphets(data.prophets);
}
 
getProphetData();
 
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let birthDate = document.createElement('p');
    let portrait = document.createElement('img');
    let birth = document.createElement('p');
   
    fullName.textContent = prophet.name +' '+ prophet.lastname;
    birthDate.textContent = 'date of Birth: ' + prophet.birthdate;
    birth.textContent =  'Place of birth: ' + prophet.birthplace; 
    portrait.setAttribute('src',prophet.imageurl );
    portrait.setAttribute('alt','portrait of  ');
    portrait.setAttribute('loading', "lazy");
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');
    // portrait.setAttribute('box-shadow ', '0 0 30px #777');
    
    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(birth);
    card.appendChild(portrait);
    cards.appendChild(card);
 
  });
}
 