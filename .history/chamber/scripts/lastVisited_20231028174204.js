const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0){
  visitsDisplay.textContent = 'you have visited '  + numVisits +'times ' ;
} else {
  visitsDisplay.textContent = 'This is your first visit. 🥳 Welcome! ';

}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);