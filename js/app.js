import '../styles/style.scss';
import lazyLoad from "./lazy-load/index";
import sidenav from './side-nav'
import product_slider from './product-slider'
import addToCart from './add-to-cart';
import slideNav from './slide-nav';
import modal from './modal';
import topNav from './top-nav';
modal()
addToCart();
sidenav();
slideNav();
topNav();
window.addEventListener('load', () => {
  product_slider();
  setTimeout(() => document.getElementsByTagName('body')[0].classList.add('loaded'))
  }
)

