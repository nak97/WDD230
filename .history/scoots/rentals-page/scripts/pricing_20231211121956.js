const url = './data/pricing.json'
async function getPrice() {
 const response = await fetch(url)
 const data = await response.json();
 console.log(data)

 var half = data.reservation[0].type

 document.querySelector('#price-half-metro').innerText = half
}
getPrice();