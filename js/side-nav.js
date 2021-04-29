export default function() {
  const menuTrigger = document.querySelector('.menu-burger');
  const closeTrigger = document.querySelector('.close-side-nav')
  const body = document.getElementsByTagName('body')[0];
  let navShowing = false;

  const toggleSideNav = () => {
    console.log('toggle')
    if(!body.classList.contains('nav-showing')) {
      body.classList.add('nav-showing')
      setTimeout(() => {
        navShowing = true
      })
    } else {
      body.classList.remove('nav-showing')
      navShowing = false;
    }    
  }

  
  
  closeTrigger.addEventListener('click', toggleSideNav)
  menuTrigger.addEventListener('click', toggleSideNav)
  
  
    window.addEventListener('click', function(event) {
      if(navShowing && body.classList.contains('nav-showing')) {
        if(!event.target.closest('.side-nav')) {
          body.classList.remove('nav-showing')
          navShowing = false
        }
      }
    })  
}
