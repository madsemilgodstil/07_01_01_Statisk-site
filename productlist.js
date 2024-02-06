const urlParams = new URLSearchParams(window.location.search)
const urlInfo = urlParams.get('Urlinfo')
console.log(urlInfo)

fetch(`https://kea-alt-del.dk/t7/api/products?season=${urlInfo}`)
  .then(response => response.json())
  .then(dataReceived)

function dataReceived (data) {
  data.forEach(showProductList)
}

function showProductList (showProduct) {
  const products = document.querySelector('template').content
  const myClone = products.cloneNode(true)

  myClone.querySelector('h2').textContent = showProduct.productdisplayname
  myClone.querySelector('.productId').textContent = showProduct.id
  myClone.querySelector('.season').textContent = showProduct.season

  myClone.querySelector('a').href = `produkt.html?ProductId=${showProduct.id}`
  myClone.querySelector(
    'img'
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${showProduct.id}.webp`

  myClone.querySelector('.price span').textContent = showProduct.price
  myClone.querySelector('.discount span').textContent = showProduct.discount

  if (!showProduct.discount) {
    myClone.querySelector('.discount').remove()
  }

  const parentElement = document.querySelector('main')
  parentElement.appendChild(myClone)
}
