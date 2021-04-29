export default function() {
  const add_to_cart = document.querySelectorAll('.add-to-cart');
  let current_qty = -1;


  const update_cart = (event) => {
    console.log('updated cart')
    if(current_qty === -1) {
      document.querySelector('.product__counter').innerHTML =`
        <span class="product-count">
          <span class="product-count__num">
            
          </span>
        </span>
      `
    }

    current_qty = current_qty + 1;
    console.log(current_qty)

    document.querySelector('.product-count__num').innerHTML = current_qty + 1
    // let new_qty = document.querySelector('.product-count__num').innerHTML;
    // document.querySelector('.product-count__num').innerHTML = new_qty.JSON.parse(current_qty) + 1;
  }

  add_to_cart.forEach((btn) => {
    btn.addEventListener('click', event => update_cart(event))
  })
}