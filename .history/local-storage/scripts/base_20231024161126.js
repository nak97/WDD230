const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
button.addEventListener('click',function() {if (input.value != " ") {
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append (deleteButton);
list.append(deleteButton);
list.append(li);
deleteButton.addEventListener('click', function() {
  list.removeChild(li);
  input.focus();
  input.focus();
input.value = '';
});
}
});

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

button.addEventListener('click', ( ) => {
  if (input.value != ' ') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = ' ';
    input.focus();
  }
});

function displayList(item) {
  let li = document.createElement ('li');
  let deletebutton = document.createElement('button');
  li.textContent = item;
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete');
  li.append(deletebutton)
  list.append(li)
  deletebutton.addEventListener('click',function () {
    list.removeChild(li);
    deleteChapter (li.textContent);
    input.focus();
  });
  console.log('I typed it out like a good student')

}
function setChapterList(){
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray))
}

