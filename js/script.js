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
window.addEventListener("scroll", function () {
  const originalNav = document.querySelector(".original_nav");
  const scrollNav = document.querySelector(".scroll_nav");

  if (window.scrollY > 100) {
    originalNav.style.visibility = "hidden"; // stays in flow
    originalNav.style.opacity = "0";
    scrollNav.style.display = "block";
  } else {
    originalNav.style.visibility = "visible";
    originalNav.style.opacity = "1";
    scrollNav.style.display = "none";
  }
});
