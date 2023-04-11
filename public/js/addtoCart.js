const buttons = document.querySelectorAll('#addToCart')

function addtocart() {
    const productId = parseInt(this.getAttribute('data-productid'))
    fetch('/api/cart', {
        method: 'POST',
        body: JSON.stringify({ productId }),
        headers: { 'Content-Type': 'application/json' },
    })
}
buttons.forEach((button) => button.addEventListener('click', addtocart))
