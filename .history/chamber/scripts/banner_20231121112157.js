const day = new Date()

console.log(day.getDay())
function banner(day){
  if (day < 3 ){
    document.getElementById("banner").style.display = "none"
  }
  return day
}


// document.querySelector("# ").onclick = function(){

// }