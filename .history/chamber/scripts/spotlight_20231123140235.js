const url = './data/members.json';
const nameOne = document.querySelector('#company-one');
const nameTwo = document.querySelector('#company-two');
const nameThree = document.querySelector('#company-three');

 
async function getMembersData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.members);
  // displayMembers(data.members);
  console.log(data)
  

nameOne.textContent = `${members[0].name}`
nameTwo.textContent = `${members[1].name}`
nameThree.textContent = `${members[2].name}`
}