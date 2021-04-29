import '../styles/style.scss';
import lazyLoad from "./lazy-load/index";
import sidenav from './side-nav'
import product_slider from './product-slider'
import addToCart from './add-to-cart';
import sideCart from './side-cart';
sideCart()
addToCart()
sidenav();
window.addEventListener('load', () => product_slider())
console.log('js initatied')
