const url = './data/members.json';
async function getMembersData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.members);
  displayMembers(data.members);
var nameOne = data.members[0];
document.querySelector(".spotlight-one")
console.log(nameOne);
}
 



 