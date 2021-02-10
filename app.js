const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const credentialsMenu = document.querySelector('#credentials-page');
    const bookingMenu = document.querySelector('#bookappointment-page');
    let scrollPos = window.scrollY;
    // console.log(scrollPos);
  
    // adds 'highlight' class to my menu items
    if (window.innerWidth > 1160 && scrollPos < 600) {
      homeMenu.classList.add('highlight');
      credentialsMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 1160 && scrollPos < 1400) {
      credentialsMenu.classList.add('highlight');
      homeMenu.classList.remove('highlight');
      bookingMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 1160 && scrollPos < 2345) {
      bookingMenu.classList.add('highlight');
      credentialsMenu.classList.remove('highlight');
      return;
    }
  
    if ((elem && window.innerWIdth < 1160 && scrollPos < 600) || elem) {
      elem.classList.remove('highlight');
    }
  };
  
  window.addEventListener('scroll', highlightMenu);
  window.addEventListener('click', highlightMenu);
  
  //  Close mobile Menu when clicking on a menu item
  const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 1160 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  };
  
  menuLinks.addEventListener('click', hideMobileMenu);
  navLogo.addEventListener('click', hideMobileMenu);