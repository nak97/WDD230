const url = './data/pricing.json'
async function getPrice() {
 const response = await fetch(url)
 const data = await response.json();
 console.log(data)

 const half = data.reservation[0].type

 document.getElementById('price-half-metro').textContent = half
}
getPrice();