
//HOME SWIPER

document.addEventListener('DOMContentLoaded', function () {
    let swiperHome = new Swiper('.book-carousel', {
        loop: true,
        spaceBetween: -100,
        grabCursor: true,
        slidesPerView: 'auto',
        centeredSlides: true,
      
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
      
        breakpoints: {
         1220: {
            spaceBetween: -100,

          },
    
        },
    });
});

// MENU ICON TOGGLE FUNCTIONALITY
const menuIcon = document.getElementById('menu-icon');  // Get the menu icon element
const navList = document.querySelector('.navlist');    // Get the nav list

menuIcon.addEventListener('click', function() {
  navList.classList.toggle('show');  // Toggle the 'show' class on click
});

// Close menu when clicking outside (optional enhancement)
document.addEventListener('click', function(event) {
  if (!menuIcon.contains(event.target) && !navList.contains(event.target)) {
    navList.classList.remove('show');  // Close menu if clicked outside
  }
});

// LOGIN OVERLAY
const loginModal = document.getElementById('login'),
      loginButton = document.getElementById('login-button'),
      loginClose = document.querySelector(".close")

if(loginButton) {
  loginButton.addEventListener('click', () =>{
    loginModal.classList.add('show-login')
  })
}

// When the user clicks on <span> (x), close the modal
if(loginClose) {
  loginClose.addEventListener('click', () =>{
    loginModal.classList.remove('show-login')
  })
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.classList.remove('show-login');
  }
}