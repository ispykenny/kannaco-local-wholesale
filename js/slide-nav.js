export default function() {
  const slideNav = event => {
    event.preventDefault();
    const $this = $(event.currentTarget);
    const id = $this.attr('href');
    const header_height = $('header').height();
    const nav_height = $('.start-cart').height();
    const total_heights = header_height + nav_height;
    
    $('body, html').animate({
      scrollTop: $(id).offset().top - total_heights +'px'
    })



  }


  $('.start-cart__nav a').on('click', event => slideNav(event))
}