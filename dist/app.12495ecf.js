parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"vGcg":[function(require,module,exports) {

},{"./../assets/FuturaPRO-Medium.eot":[["FuturaPRO-Medium.2deeb5c9.eot","vJgH"],"vJgH"],"./../assets/FuturaPRO-Medium.woff":[["FuturaPRO-Medium.635516de.woff","ZgsW"],"ZgsW"],"./../assets/FuturaPRO-Medium.ttf":[["FuturaPRO-Medium.4038e9aa.ttf","NSYF"],"NSYF"],"./../assets/FuturaPRO-Medium.svg":[["FuturaPRO-Medium.d7148d7f.svg","KZQ3"],"KZQ3"],"./../assets/FuturaPRO-Book.eot":[["FuturaPRO-Book.d39b85df.eot","Yvul"],"Yvul"],"./../assets/FuturaPRO-Book.woff":[["FuturaPRO-Book.92971c6e.woff","qitp"],"qitp"],"./../assets/FuturaPRO-Book.ttf":[["FuturaPRO-Book.15994cee.ttf","qQV2"],"qQV2"],"./../assets/FuturaPRO-Book.svg":[["FuturaPRO-Book.4223f5a6.svg","fsDY"],"fsDY"],"./../assets/FuturaPRO-Bold.eot":[["FuturaPRO-Bold.bce30257.eot","Vte2"],"Vte2"],"./../assets/FuturaPRO-Bold.woff":[["FuturaPRO-Bold.4d58a530.woff","m7sB"],"m7sB"],"./../assets/FuturaPRO-Bold.ttf":[["FuturaPRO-Bold.60d6040d.ttf","j9BY"],"j9BY"],"./../assets/FuturaPRO-Bold.svg":[["FuturaPRO-Bold.ce6ccca6.svg","LJUb"],"LJUb"]}],"xLPE":[function(require,module,exports) {
!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=function(t){for(var e=window.document,o=i(e);o;)o=i(e=o.ownerDocument);return e}(),e=[],o=null,n=null;s.prototype.THROTTLE_TIMEOUT=100,s.prototype.POLL_INTERVAL=null,s.prototype.USE_MUTATION_OBSERVER=!0,s._setupCrossOriginUpdater=function(){return o||(o=function(t,o){n=t&&o?l(t,o):{top:0,bottom:0,left:0,right:0,width:0,height:0},e.forEach(function(t){t._checkForIntersections()})}),o},s._resetCrossOriginUpdater=function(){o=null,n=null},s.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},s.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},s.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},s.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},s.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,o){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==o[e-1]})},s.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},s.prototype._monitorIntersections=function(e){var o=e.defaultView;if(o&&-1==this._monitoringDocuments.indexOf(e)){var n=this._checkForIntersections,r=null,s=null;this.POLL_INTERVAL?r=o.setInterval(n,this.POLL_INTERVAL):(h(o,"resize",n,!0),h(e,"scroll",n,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in o&&(s=new o.MutationObserver(n)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push(function(){var t=e.defaultView;t&&(r&&t.clearInterval(r),c(t,"resize",n,!0)),c(e,"scroll",n,!0),s&&s.disconnect()});var u=this.root&&(this.root.ownerDocument||this.root)||t;if(e!=u){var a=i(e);a&&this._monitorIntersections(a.ownerDocument)}}},s.prototype._unmonitorIntersections=function(e){var o=this._monitoringDocuments.indexOf(e);if(-1!=o){var n=this.root&&(this.root.ownerDocument||this.root)||t;if(!this._observationTargets.some(function(t){var o=t.element.ownerDocument;if(o==e)return!0;for(;o&&o!=n;){var r=i(o);if((o=r&&r.ownerDocument)==e)return!0}return!1})){var r=this._monitoringUnsubscribes[o];if(this._monitoringDocuments.splice(o,1),this._monitoringUnsubscribes.splice(o,1),r(),e!=n){var s=i(e);s&&this._unmonitorIntersections(s.ownerDocument)}}}},s.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},s.prototype._checkForIntersections=function(){if(this.root||!o||n){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(n){var i=n.element,s=u(i),h=this._rootContainsTarget(i),c=n.entry,a=t&&h&&this._computeTargetAndRootIntersection(i,s,e),l=null;this._rootContainsTarget(i)?o&&!this.root||(l=e):l={top:0,bottom:0,left:0,right:0,width:0,height:0};var f=n.entry=new r({time:window.performance&&performance.now&&performance.now(),target:i,boundingClientRect:s,rootBounds:l,intersectionRect:a});c?t&&h?this._hasCrossedThreshold(c,f)&&this._queuedEntries.push(f):c&&c.isIntersecting&&this._queuedEntries.push(f):this._queuedEntries.push(f)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},s.prototype._computeTargetAndRootIntersection=function(e,i,r){if("none"!=window.getComputedStyle(e).display){for(var s,h,c,a,f,d,g,m,v=i,_=p(e),b=!1;!b&&_;){var w=null,y=1==_.nodeType?window.getComputedStyle(_):{};if("none"==y.display)return null;if(_==this.root||9==_.nodeType)if(b=!0,_==this.root||_==t)o&&!this.root?!n||0==n.width&&0==n.height?(_=null,w=null,v=null):w=n:w=r;else{var I=p(_),E=I&&u(I),T=I&&this._computeTargetAndRootIntersection(I,E,r);E&&T?(_=I,w=l(E,T)):(_=null,v=null)}else{var R=_.ownerDocument;_!=R.body&&_!=R.documentElement&&"visible"!=y.overflow&&(w=u(_))}if(w&&(s=w,h=v,c=void 0,a=void 0,f=void 0,d=void 0,g=void 0,m=void 0,c=Math.max(s.top,h.top),a=Math.min(s.bottom,h.bottom),f=Math.max(s.left,h.left),d=Math.min(s.right,h.right),m=a-c,v=(g=d-f)>=0&&m>=0&&{top:c,bottom:a,left:f,right:d,width:g,height:m}||null),!v)break;_=_&&p(_)}return v}},s.prototype._getRootRect=function(){var e;if(this.root&&!d(this.root))e=u(this.root);else{var o=d(this.root)?this.root:t,n=o.documentElement,i=o.body;e={top:0,left:0,right:n.clientWidth||i.clientWidth,width:n.clientWidth||i.clientWidth,bottom:n.clientHeight||i.clientHeight,height:n.clientHeight||i.clientHeight}}return this._expandRectByRootMargin(e)},s.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,o){return"px"==e.unit?e.value:e.value*(o%2?t.width:t.height)/100}),o={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return o.width=o.right-o.left,o.height=o.bottom-o.top,o},s.prototype._hasCrossedThreshold=function(t,e){var o=t&&t.isIntersecting?t.intersectionRatio||0:-1,n=e.isIntersecting?e.intersectionRatio||0:-1;if(o!==n)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==o||r==n||r<o!=r<n)return!0}},s.prototype._rootIsInDom=function(){return!this.root||f(t,this.root)},s.prototype._rootContainsTarget=function(e){var o=this.root&&(this.root.ownerDocument||this.root)||t;return f(o,e)&&(!this.root||o==e.ownerDocument)},s.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},s.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=s,window.IntersectionObserverEntry=r}function i(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(e){return null}}function r(t){this.time=t.time,this.target=t.target,this.rootBounds=a(t.rootBounds),this.boundingClientRect=a(t.boundingClientRect),this.intersectionRect=a(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,o=e.width*e.height,n=this.intersectionRect,i=n.width*n.height;this.intersectionRatio=o?Number((i/o).toFixed(4)):this.isIntersecting?1:0}function s(t,e){var o,n,i,r=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(r.root&&1!=r.root.nodeType&&9!=r.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(o=this._checkForIntersections.bind(this),n=this.THROTTLE_TIMEOUT,i=null,function(){i||(i=setTimeout(function(){o(),i=null},n))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(r.rootMargin),this.thresholds=this._initThresholds(r.threshold),this.root=r.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function h(t,e,o,n){"function"==typeof t.addEventListener?t.addEventListener(e,o,n||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,o)}function c(t,e,o,n){"function"==typeof t.removeEventListener?t.removeEventListener(e,o,n||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,o)}function u(t){var e;try{e=t.getBoundingClientRect()}catch(o){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function a(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function l(t,e){var o=e.top-t.top,n=e.left-t.left;return{top:o,left:n,height:e.height,width:e.width,bottom:o+e.height,right:n+e.width}}function f(t,e){for(var o=e;o;){if(o==t)return!0;o=p(o)}return!1}function p(e){var o=e.parentNode;return 9==e.nodeType&&e!=t?i(e):(o&&o.assignedSlot&&(o=o.assignedSlot.parentNode),o&&11==o.nodeType&&o.host?o.host:o)}function d(t){return t&&9===t.nodeType}}();
},{}],"oz57":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setBackgroundImages=void 0,require("intersection-observer");var e={root:null,rootMargin:"0px",threshold:.3},t=function(){var t=document.querySelectorAll(".section-bg__el"),r=new IntersectionObserver(function(e){e.forEach(function(e){if(e.intersectionRatio>0){var t=new Image;t.src=e.target.getAttribute("data-bg"),t.onload=function(){e.target.style.backgroundImage="url("+t.src+")",e.target.closest(".section-bg").classList.add("active"),e.target.setAttribute("data-bg","")}}})},e);t.forEach(function(e){r.observe(e)})};exports.setBackgroundImages=t;
},{"intersection-observer":"xLPE"}],"qwqa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initDomImages=exports.getImageRatio=void 0,require("intersection-observer");var t={root:null,rootMargin:"0px",threshold:.5},e=function(t,e,i,r){t.setAttribute("src","");var o=document.createElement("div"),a=t.parentElement;o.setAttribute("class","image-el"),o.setAttribute("style","position: relative; width: auto; height: 0px;"),o.innerHTML="<img class=\"lazy-image\" src='' data-src='".concat(i,"' alt='").concat(r,"'>"),o.style.paddingBottom=e.height/e.width*100+"%",a.innerHTML="",a.appendChild(o),document.querySelectorAll(".lazy-image").forEach(function(t){t.setAttribute("style","position: absolute; top: 0; left: 0; width: 100%; height: 100%;")})},i=function(t){t.forEach(function(t){var i=t.getAttribute("src"),r=t.getAttribute("alt");if(t.offsetHeight<=0)var o=setInterval(function(){if(t.offsetHeight>0){var a={height:t.offsetHeight,width:t.offsetWidth};e(t,a,i,r),clearInterval(o)}});else{var a={height:t.offsetHeight,width:t.offsetWidth};e(t,a,i,r)}})};exports.getImageRatio=i;var r=function(e){var i=new IntersectionObserver(function(t){t.forEach(function(t){if(t.intersectionRatio>0&&t.target.getAttribute("data-src")){var e=new Image;e.src=t.target.getAttribute("data-src"),e.onload=function(){t.target.setAttribute("src",e.src),t.target.classList.add("loaded")}}})},t);e.forEach(function(t){i.observe(t)})};exports.initDomImages=r;
},{"intersection-observer":"xLPE"}],"BzuR":[function(require,module,exports) {
"use strict";var e=require("./backgrounds"),t=require("./images"),o=document.querySelectorAll("img"),i=document.querySelector(".article");i?console.log("didnt init lazy load"):(0,t.getImageRatio)(o),o.length&&(window.onload=function(){var o=document.querySelectorAll("img");i?o.forEach(function(e){e.style.opacity=1,e.style.width="auto",e.style.maxWidth="100%"}):(0,t.initDomImages)(o),(0,e.setBackgroundImages)()});
},{"./backgrounds":"oz57","./images":"qwqa"}],"jzFa":[function(require,module,exports) {
"use strict";function e(){var e=document.querySelector(".menu-burger"),n=document.querySelector(".close-side-nav"),s=document.getElementsByTagName("body")[0],t=!1,o=function(){console.log("toggle"),s.classList.contains("nav-showing")?(s.classList.remove("nav-showing"),t=!1):(s.classList.add("nav-showing"),setTimeout(function(){t=!0}))};n.addEventListener("click",o),e.addEventListener("click",o),window.addEventListener("click",function(e){t&&s.classList.contains("nav-showing")&&(e.target.closest(".side-nav")||(s.classList.remove("nav-showing"),t=!1))})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"RPN4":[function(require,module,exports) {
"use strict";function e(){$(".product-group__slide").each(function(e,t){$(t).flickity({cellAlign:"left",wrapAround:!0,cellSelector:".product-group__item"})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"m3Q8":[function(require,module,exports) {
"use strict";function n(){var n=document.querySelectorAll(".add-to-cart"),e=-1;n.forEach(function(n){n.addEventListener("click",function(n){return console.log("updated cart"),-1===e&&(document.querySelector(".product__counter").innerHTML='\n        <span class="product-count">\n          <span class="product-count__num">\n            \n          </span>\n        </span>\n      '),e+=1,console.log(e),void(document.querySelector(".product-count__num").innerHTML=e+1)})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;
},{}],"iqKQ":[function(require,module,exports) {
"use strict";function e(){var e=document.querySelector(".ka-cart button"),t=document.getElementById("close-side-cart__btn"),s=document.getElementsByTagName("body")[0],c=!1,i=function(){s.classList.contains("showing-side-cart")?(s.classList.remove("showing-side-cart"),c=!1):(s.classList.add("showing-side-cart"),setTimeout(function(){return c=!0}))};t.addEventListener("click",i),e.addEventListener("click",i),window.addEventListener("click",function(e){c&&s.classList.contains("showing-side-cart")&&(console.log("clickity",c),e.target.closest(".side-cart")||(console.log("accepted"),s.classList.remove("showing-side-cart"),c=!1))})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"pN8T":[function(require,module,exports) {
"use strict";function t(){$(".start-cart__nav a").on("click",function(t){return function(t){t.preventDefault();var e=$(t.currentTarget).attr("href"),r=$("header").height()+$(".start-cart").height();$("body, html").animate({scrollTop:$(e).offset().top-r+"px"}),console.log(r)}(t)}),$(".scroll-top a").on("click",function(t){return function(t){t.preventDefault(),$("body, html").animate({scrollTop:"0px"},1e3)}(t)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;
},{}],"RSqK":[function(require,module,exports) {
"use strict";function e(){var e=document.querySelectorAll(".view-details"),n=document.getElementsByTagName("body")[0],t=function e(t){if(t.preventDefault(),n.classList.contains("modal-showing"))n.classList.remove("modal-showing"),n.classList.remove("modal-element-inview"),document.querySelector(".modal").innerHTML="",console.log("should-have-closed");else{console.log("should have opened"),n.classList.add("modal-showing"),window.scrollTo(0,0),setTimeout(function(){return n.classList.add("modal-element-inview")});var o=t.currentTarget;l=(i=o).closest(".product-group__item"),c=i.closest(".product-group__item"),r=l.querySelector(".product-group__price").innerHTML,s=l.querySelector(".product-group__title").innerText,document.querySelector(".modal").innerHTML='\n    <div class="modal__liner">\n      <div class="modal__element">\n        <div class="modal__inner">\n          <div class="modal__product-image">\n          <div class="modal__product-image">\n             <img src="'.concat(c.querySelector("img").getAttribute("src"),'" style="opacity: 1; width: 100%;">\n          </div>\n          </div>\n          <div class="modal__product-details">\n            <div class="modal__product-info">\n              <h4>').concat(r,"</h4>\n              <h1>").concat(s,"</h1>\n              ").concat(l.getAttribute("data-content"),'\n            </div>\n            <div class="modal__add-btn">\n              <button class="close-modal">\n                Cancel\n              </button>\n              <form action="">\n                <button class="add-to-cart">\n                  <span>\n                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>\n                  </span>\n                  <span>Quick Add</span>\n                </button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>    \n    '),document.querySelector(".close-modal").addEventListener("click",function(n){return e(n)}),setTimeout(function(){var e=document.querySelector(".modal__element").clientHeight+100;document.querySelector(".modal__liner").style.minHeight=e})}var i,l,c,r,s};e.forEach(function(e){e.addEventListener("click",function(e){return t(e)})});var o,i,l,c,r=(o=function(){!function(){if(n.classList.contains("modal-showing")){var e=document.querySelector(".modal__element").clientHeight+100;document.querySelector(".modal__liner").style.minHeight=e}}()},i=250,function(){var e=this,n=arguments,t=l&&!c;clearTimeout(c),c=setTimeout(function(){c=null,l||o.apply(e,n)},i),t&&o.apply(e,n)});window.addEventListener("resize",r)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"QdeU":[function(require,module,exports) {
"use strict";require("../styles/style.scss");var e=l(require("./lazy-load/index")),d=l(require("./side-nav")),t=l(require("./product-slider")),r=l(require("./add-to-cart")),u=l(require("./side-cart")),a=l(require("./slide-nav")),i=l(require("./modal"));function l(e){return e&&e.__esModule?e:{default:e}}(0,i.default)(),(0,u.default)(),(0,r.default)(),(0,d.default)(),(0,a.default)(),window.addEventListener("load",function(){(0,t.default)(),setTimeout(function(){return document.getElementsByTagName("body")[0].classList.add("loaded")})});
},{"../styles/style.scss":"vGcg","./lazy-load/index":"BzuR","./side-nav":"jzFa","./product-slider":"RPN4","./add-to-cart":"m3Q8","./side-cart":"iqKQ","./slide-nav":"pN8T","./modal":"RSqK"}]},{},["QdeU"], null)
//# sourceMappingURL=app.12495ecf.js.map