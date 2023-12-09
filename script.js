const homeSection = document.querySelector(".intro");
const educationSection = document.querySelector(".education");
const aboutSection = document.querySelector(".aboutMe");
const skillsSection = document.querySelector(".part3");
const projectsSection = document.querySelector(".projects");
const experienceSection = document.querySelector(".experience");
const contactSection = document.querySelector(".contactMe");

document.querySelector(".home-link").addEventListener("click", () => {
  homeSection.scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".about-link").addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".skills-link").addEventListener("click", () => {
  skillsSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".projects-link").addEventListener("click", () => {
  projectsSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".experience-link").addEventListener("click", () => {
  experienceSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".education-link").addEventListener("click", () => {
  console.log("Clicked");
  educationSection.scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".contact-link").addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
});

var typed = new Typed(".typeInput", {
  strings: ["Full Stack Web Developer "],
  typeSpeed: 70,
  smartBackspace: true,
  loop: true,
});
