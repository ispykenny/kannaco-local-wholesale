
export default function() {
  const modal_trigger = document.querySelectorAll('.view-details');
  const body = document.getElementsByTagName('body')[0];

  const product_data_fetcher = ($selector) => {
    const data_root = $selector.closest('.product-group__item');
    const product_image = $selector.closest('.product-group__item');
    const price = data_root.querySelector('.product-group__price').innerHTML;
    const product_title = data_root.querySelector('.product-group__title').innerText;

    document.querySelector('.modal').innerHTML = `
    <div class="modal__liner">
      <div class="modal__element">
        <div class="modal__inner">
          <div class="modal__product-image">
            <div class="image-el loaded" style="position: relative; width: auto; height: 0px; padding-bottom: 100%;">
              <img class="loaded" src="${product_image.querySelector('img').getAttribute('src')}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity 1 !important;">
            </div>
          </div>
          <div class="modal__product-details">
            <div class="modal__product-info">
              <h4>${price}</h4>
              <h1>${product_title}</h1>
              ${data_root.getAttribute('data-content')}
            </div>
            <div class="modal__add-btn">
              <button class="close-modal">
                Cancel
              </button>
              <form action="">
                <button class="add-to-cart">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </span>
                  <span>Quick Add</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>    
    `
  }


  const init_modal = event => {
    event.preventDefault();
    if(body.classList.contains('modal-showing')) {
      body.classList.remove('modal-showing');
      body.classList.remove('modal-element-inview')
      document.querySelector('.modal').innerHTML = ``
    } else {
      body.classList.add('modal-showing')
      setTimeout(() => body.classList.add('modal-element-inview'))
      const the_active_element = event.currentTarget;
      product_data_fetcher(the_active_element);
      document.querySelector('.close-modal').addEventListener('click', event => init_modal(event))
      setTimeout(() => {
        const height = document.querySelector('.modal__element').clientHeight + 100
        document.querySelector('.modal__liner').style.minHeight = height
      })
    }
  }

  const debounce = function (func, wait, immediate) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };


  const reset_modal_window = () => {
    if(body.classList.contains('modal-showing')) {
      const height = document.querySelector('.modal__element').clientHeight + 100
        document.querySelector('.modal__liner').style.minHeight = height
    }
  }

  modal_trigger.forEach((trigger) => {
    trigger.addEventListener('click', event => init_modal(event))
  })


  const run_modal_height_adjuster = debounce(function() {
    reset_modal_window()
  }, 250);
  
  window.addEventListener('resize', run_modal_height_adjuster);
}