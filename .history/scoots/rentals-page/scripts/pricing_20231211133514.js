const url = './data/pricing.json'
async function getPrice() {
 const response = await fetch(url);
 const data = await response.json();
//  console.log(data)

// metro scooter
 document.getElementById('price-half-metro').innerText = data.reservation[0].hd;
 document.getElementById('price-f-metro').innerText = data.reservation[0].fd ;
 document.getElementById('price-h-w').innerText = data.walk[0].hd;
 document.getElementById('price-f-w').innerText = data.walk[0].fd;

// dio scooter

 document.getElementById('dio-h-r').innerText = data.reservation[1].hd;
 document.getElementById('dio-f-r').innerText = data.reservation[1].fd;
 document.getElementById('dio-h-w').innerText = data.walk[1].hd;
 document.getElementById('dio-f-w').innerText = data.walk[1].fd;

//  pxc150

document.getElementById('pcx-h-r').innerText = data.reservation[2].hd;
document.getElementById('pcx-f-r').innerText = data.reservation[2].fd;
document.getElementById('pcx-h-w').innerText = data.reservation[2].hd;
document.getElementById('pcx-f-w').innerText = data.reservation[2].fd;









}
getPrice();