document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navbarLinks = document.querySelectorAll(".Navbar ul li a");

  function scrollToSection(section) {
    section.scrollIntoView({ behavior: "smooth" });
  }

  navbarLinks.forEach((link) => {
    console.log(link);
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetSectionId = link.getAttribute("href").substring(1);
      console.log(targetSectionId);
      const targetSection = document.getElementById(targetSectionId);
      console.log(targetSection);
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

// const homeSection = document.querySelector(".intro");
// const educationSection = document.querySelector(".education");
// const aboutSection = document.querySelector(".aboutMe");
// const skillsSection = document.querySelector(".Skill");
// const projectsSection = document.querySelector(".projects");
// const experienceSection = document.querySelector(".experience");
// const contactSection = document.querySelector(".contactMe");

// document.querySelector(".home-link").addEventListener("click", () => {
//   homeSection.scrollIntoView({ behavior: "smooth" });
// });
// document.querySelector(".about-link").addEventListener("click", () => {
//   aboutSection.scrollIntoView({ behavior: "smooth" });
// });
// document.querySelector(".skills-link").addEventListener("click", () => {
//   skillsSection.scrollIntoView({ behavior: "smooth" });
// });

// document.querySelector(".projects-link").addEventListener("click", () => {
//   projectsSection.scrollIntoView({ behavior: "smooth" });
// });

// document.querySelector(".experience-link").addEventListener("click", () => {
//   experienceSection.scrollIntoView({ behavior: "smooth" });
// });

// document.querySelector(".education-link").addEventListener("click", () => {
//   console.log("Clicked");
//   educationSection.scrollIntoView({ behavior: "smooth" });
// });
// document.querySelector(".contact-link").addEventListener("click", () => {
//   contactSection.scrollIntoView({ behavior: "smooth" });
// });

var typed = new Typed(".typeInput", {
  strings: ["Full Stack Web Developer "],
  typeSpeed: 70,
  smartBackspace: true,
  loop: true,
});
