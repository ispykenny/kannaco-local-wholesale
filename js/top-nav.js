import {init_side_cart} from './side-cart';

export default function() {
  const clone_top_nav = document.createElement('div');
  clone_top_nav.classList.add('secondary-nav');
  clone_top_nav.innerHTML = document.querySelector('.top-nav').outerHTML;
  document.querySelector('main').prepend(clone_top_nav);

  clone_top_nav.addEventListener('click', event => init_side_cart(event))

  let has_scrolled = false;
  const element_to_show = document.querySelector('.sparky .inner');
  let rect = element_to_show.getBoundingClientRect();
  let height;

  document.querySelector('.start-cart').style.top = clone_top_nav.offsetHeight + 'px'

  const update_scroller = () => {
    has_scrolled = true;
    height = rect.top + element_to_show.offsetHeight
  }


  const scroll_functions = () => {
    if(has_scrolled) {
      console.log('scrolling')
      if(window.scrollY >= height) {
        document.body.classList.add('show-secondary-nav')
        setTimeout(() => document.body.classList.add('secondary-nav-built'))
      } else {
        console.log('done?')
        document.body.classList.remove('show-secondary-nav')
        document.body.classList.remove('secondary-nav-built')
      }

      has_scrolled = false;
    }

    requestAnimationFrame(scroll_functions)
  }

  requestAnimationFrame(scroll_functions)
  window.addEventListener('scroll', update_scroller)
}