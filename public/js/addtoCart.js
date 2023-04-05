document.addEventListener('DOMContentLoaded', init, false)
function init() {
    const button = document.getElementById('addToCart')
    button.addEventListener('click', addtocart, true)
    function addtocart() {
        const productId = document
            .getElementById('addToCart')
            .getAttribute('data-productid')
        fetch('/cart', {
            method: 'POST',
            body: JSON.stringify({ productId }),
            headers: { 'Content-Type': 'application/json' },
        })
    }
}
