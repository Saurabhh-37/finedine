'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}



/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}



/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }

});

/**
 * Filter by category functionality with grid rearrangement
 */
const filterBtns = document.querySelectorAll('.filter-btn');
const foodMenuItems = document.querySelectorAll('.food-menu-card');

// Add event listener to all filter buttons
filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {

    // Remove active class from all buttons
    filterBtns.forEach(button => button.classList.remove('active'));

    // Add active class to the clicked button
    this.classList.add('active');

    // Get the selected category
    const category = this.textContent.toLowerCase();

    // Show all items if "All" is clicked
    if (category === 'all') {
      foodMenuItems.forEach(item => {
        item.classList.remove('hidden');
        item.classList.add('visible');
      });
    } else {
      // Filter items by category
      foodMenuItems.forEach(item => {
        const itemCategory = item.querySelector('.category').textContent.toLowerCase();
        if (itemCategory === category) {
          item.classList.remove('hidden');
          item.classList.add('visible');
        } else {
          item.classList.remove('visible');
          item.classList.add('hidden');
        }
      });
    }
  });
});
