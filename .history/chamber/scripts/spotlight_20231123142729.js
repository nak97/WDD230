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
    let nameOne = document.createElement('section');
    let nameTwo = document.createElement('section');
    let nameThree = document.createElement('section');

    nameOne.textContent = `${members.name}`
    

    card.appendChild(nameOne);
   
  ;
  });
}


 