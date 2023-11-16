const url = './data/members.json';
const cards = document.querySelector('#cards');
 
async function getMembersData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.prophets);
  // displayMembers(data.members);
}
 
getMembersData();