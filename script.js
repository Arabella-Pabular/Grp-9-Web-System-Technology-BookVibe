
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
const navMenu = document.querySelector('.navmenu');    // Get the nav list

menuIcon.addEventListener('click', function() {
  navMenu.classList.toggle('show');  // Toggle the 'show' class on click
});

// Close menu when clicking outside (optional enhancement)
document.addEventListener('click', function(event) {
  if (!menuIcon.contains(event.target) && !navList.contains(event.target)) {
    navList.classList.remove('show');  // Close menu if clicked outside
  }
});



//LOGIN FORM

// Sample test credentials for local testing
const testEmail = "testuser@email.com";
const testPassword = "test123";

// LOGIN OVERLAY
const loginModal = document.getElementById('login'),
      loginButton = document.getElementById('login-button'),
      loginClose = document.querySelector(".close"),
      loginForm = document.querySelector("form"),
      emailInput = document.getElementById("email"),
      passwordInput = document.getElementById("password");

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

// Login form submission handler
if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const email = emailInput.value;
    const password = passwordInput.value;

    // Check if entered credentials match the test credentials
    if (email === testEmail && password === testPassword) {
      alert("Login successful (Test Mode)");
      // Proceed with your login success logic (like redirecting or enabling a feature)
    } else {
      alert("Invalid credentials (Test Mode)");
    }
  });
}

//Star Rating Functionality
// Select each book item individually
const bookItems = document.querySelectorAll('.book-item');

bookItems.forEach((bookItem) => {
    const allStars = bookItem.querySelectorAll('.star_rating .star'); // Select stars within this book item

    allStars.forEach((item, idx) => {
        item.addEventListener('click', function () {
            let click = 0;

            // Reset all stars for this book item
            allStars.forEach((i) => {
                i.classList.replace('bxs-star', 'bx-star');
                i.classList.remove('active');
            });

            // Set active stars based on click index
            for (let i = 0; i < allStars.length; i++) {
                if (i <= idx) {
                    allStars[i].classList.replace('bx-star', 'bxs-star');
                    allStars[i].classList.add('active');
                } else {
                    allStars[i].style.setProperty('--i', click);
                    click++;
                }
            }
        });
    });
});