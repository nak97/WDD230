const url = './data/members.json';
const cards = document.querySelector('#spotlight');
 
async function getMembersData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.members);
  displayMembers(data.members);
}
 
getMembersData();

const displayMembers = (members) => {
  members.forEach((members) => {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let address = document.createElement('p');
    

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(number);
  ;
  });


  const listButton = document.querySelector("#list-toggle");
  const gridButton = document.querySelector("#grid-toggle");



}


 