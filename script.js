document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navbarLinks = document.querySelectorAll(".Navbar ul li a");

  function scrollToSection(section) {
    section.scrollIntoView({ behavior: "smooth" });
  }

  navbarLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetSectionId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetSectionId);
      scrollToSection(targetSection);
    });
  });

  window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });
    setActiveLink(currentSection);
  });

  function setActiveLink(currentSection) {
    navbarLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.classList.contains(`${currentSection}-link`)) {
        link.classList.add("active");
      }
    });
  }
});
var typed = new Typed(".typeInput", {
  strings: ["Full Stack Web Developer","NodeJs Developer","ReactJs Developer"],
  typeSpeed: 50,
  smartBackspace: true,
  loop: true,
});

const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile");
const toggle = document.querySelector(".toggle-container");

openMenu.addEventListener("click", () => {
  mobileMenu.style.top = "60px";
  closeMenu.style.top = "-100%";
  openMenu.style.top = "-100%";
});
closeMenu.addEventListener("click", () => {
  mobileMenu.style.top = "-100%";
  openMenu.style.top = "0%";
  closeMenu.style.top = "0%";
});
