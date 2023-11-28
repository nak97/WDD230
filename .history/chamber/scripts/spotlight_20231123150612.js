const url = './data/members.json';
const cardLax = document.querySelector('#spotlight');
 
async function getMembersData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.members);
  displayMembers(data.members);
}
 
getMembersData();

const displayMembers = (members) => {
  members.forEach((members) => {
    let cardOne = document.createElement('section');
    let cardTwo = document.createElement('section');
    let cardThree = document.createElement('section');
    // let nameTwo = document.createElement('section');
    // let nameThree = document.createElement('section');

    nameOne.textContent = `${members.name}`
    

    cardOne.appendChild(nameOne);
   
  ;
  });
}


 