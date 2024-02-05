fetch('https://kea-alt-del.dk/t7/api/products')
  .then(response => response.json())
  .then(data => showProduct(data))

function showProduct (product) {
  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get('productId')
  document.querySelector('.ProductId').textContent = id
  console.log(id)

  console.log(product)
  document.querySelector('h2').textContent = product.productdisplayname
  document.querySelector('.newProductId').textContent = product.id
  document.querySelector('.price span').textContent = product.price
  document.querySelector(
    '.img'
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${showProduct.id}.webp`
}
