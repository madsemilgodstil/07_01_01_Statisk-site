fetch('https://kea-alt-del.dk/t7/api/products')
  .then(response => response.json())
  .then(dataRecieved)

function dataRecieved (data) {
  data.forEach(showProductlist)
}

function showProductlist (showProduct) {
  const products = document.querySelector('template').content
  const myClone = products.cloneNode(true)

  myClone.querySelector('h2').textContent = showProduct.productdisplayname
  myClone.querySelector('.productId').textContent = showProduct.id
  myClone.querySelector(
    'img'
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${showProduct.id}.webp`
  myClone.querySelector('.price span').textContent = showProduct.price

  const parentElement = document.querySelector('main')
  parentElement.appendChild(myClone)
}
