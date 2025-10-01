document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 1, // one slide at a time
    autoplay: true,
    interval: 5000, // 10s per slide
    pauseOnHover: false,
    arrows: false,
    pagination: false,
    drag: true,
  }).mount();
});

// NAV SWITCH ON SCROLL
window.addEventListener("scroll", function () {
  const originalNav = document.querySelector(".original_nav");
  const scrollNav = document.querySelector(".scroll_nav");

  if (window.scrollY > 100) {
    originalNav.style.visibility = "hidden";
    originalNav.style.opacity = "0";
    scrollNav.style.display = "block";
  } else {
    originalNav.style.visibility = "visible";
    originalNav.style.opacity = "1";
    scrollNav.style.display = "none";
  }
});

// MOBILE MENU TOGGLE
document.querySelectorAll(".click_button").forEach((button) => {
  button.addEventListener("click", function () {
    const menu = this.parentElement.querySelector(".hide_menu");

    // toggle current menu
    menu.classList.toggle("show_menu");

    // close all other menus
    document.querySelectorAll(".hide_menu").forEach((otherMenu) => {
      if (otherMenu !== menu) {
        otherMenu.classList.remove("show_menu");
      }
    });
  });
});
