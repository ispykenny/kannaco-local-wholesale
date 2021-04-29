export default function() {
  const cart_button = document.querySelector('.ka-cart button');
  const close_side_cart = document.getElementById('close-side-cart__btn');
  const body = document.getElementsByTagName('body')[0];
  let side_nav_showing = false;

  const init_side_cart = () => {
    if(!body.classList.contains('showing-side-cart')) {
      body.classList.add('showing-side-cart')
      setTimeout(() => side_nav_showing = true)
    } else {
      body.classList.remove('showing-side-cart')
      side_nav_showing = false;
    }
  }

  

  close_side_cart.addEventListener('click',init_side_cart)
  cart_button.addEventListener('click', init_side_cart)

  window.addEventListener('click', function(event) {
    if(side_nav_showing && body.classList.contains('showing-side-cart')) {
      console.log('clickity', side_nav_showing)
      if(!event.target.closest('.side-cart')) {
        console.log('accepted')
        body.classList.remove('showing-side-cart')
        side_nav_showing = false
      }
    }
  })

}