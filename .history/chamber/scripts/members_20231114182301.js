const url = './data/members.json';
const cards = document.querySelector('#cards');
 
async function getMembersData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.members);
  displayMembers(data.members);
}
 
getMembersData();

const displayMembers = (members) => {
  prophets.forEach((members) => {
    let card = document.createElement('section');
    
 
  });
}
 