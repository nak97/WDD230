const url = './data/pricing.json'
async function getPrice() {
 const response = await fetch(url)
 const data = await response.json();
 console.log(data)

 document.getElementById('price-half-metro').innerHTML = data.reservation[0].type
}
getPrice();