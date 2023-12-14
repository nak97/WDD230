const url = './data/pricing.json'
async function getPrice() {
 const response = await fetch(url);
 const data = await response.json();
//  console.log(data)
 document.getElementById('price-half-metro').innerText = data.reservation[0].hd;
 document.getElementById('price-f-metro').innerText = data.reservation[0].fd ;
 document.getElementById('price-h-w').innerText = data.reservation[0].hd;





}
getPrice();