const bar = document.getElementById("bar");
const closeSidebar = document.getElementById("closeSideBar");
const sideBar = document.querySelector("aside");

let sideBarIsOpen = false;

bar.addEventListener("click", (e) => {
  if (!sideBarIsOpen) {
    sideBar.style.transform = "translateX(0)";
    sideBarIsOpen = true;
  }
});

closeSidebar.addEventListener("click", () => {
  if (sideBarIsOpen) {
    sideBar.style.transform = "translateX(100%)";
    sideBarIsOpen = false;
  }
});

/**
 * On scroll effect for the Nav
 */

const navToBeScrolled = document.querySelector("header nav");

window.addEventListener("scroll", () => {
  if (scrollY > 500) {
    navToBeScrolled.id = "nav-scrolled";
  } else {
    navToBeScrolled.id = "";
  }
});

$(".owl-carousel").owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
