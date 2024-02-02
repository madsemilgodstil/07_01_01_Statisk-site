fetch()
  .then(response => response.json)
  .then(data => showProduct(data))

function showProduct (product) {
  console.log(product)
  document.querySelector().textContent = product.productdisplayname
  document.querySelector('img').src = '#'
}
