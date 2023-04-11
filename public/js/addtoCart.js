const button = document.getElementById('addToCart')

function addtocart() {
    const productId = parseInt(
        document.getElementById('addToCart').getAttribute('data-productid')
    )
    console.log(productId)
    fetch('/api/cart', {
        method: 'POST',
        body: JSON.stringify({ productId }),
        headers: { 'Content-Type': 'application/json' },
    })
}
button.addEventListener('click', addtocart)
