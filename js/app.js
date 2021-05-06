import '../styles/style.scss';
import lazyLoad from "./lazy-load/index";
import sidenav from './side-nav'
import product_slider from './product-slider'
import addToCart from './add-to-cart';
import sideCart from './side-cart';
import slideNav from './slide-nav';
import modal from './modal';
modal()
sideCart();
addToCart();
sidenav();
slideNav();
window.addEventListener('load', () => {
  product_slider();
  setTimeout(() => document.getElementsByTagName('body')[0].classList.add('loaded'))
  }
)

