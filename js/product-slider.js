export default function() {
  const product_slider = $('.product-group__slide');


  product_slider.each(($index, $slide) => {
    let $this = $($slide)
    $this.flickity({
      cellAlign: 'left',
      wrapAround: true,
      cellSelector: '.product-group__item'
    }) 
  })
  
}