const navLinks = document.querySelectorAll(".Navbar ul li a");
// console.log(navLinks);

function setActiveLink() {
  navLinks.forEach((link) => {
    const sectionId = link.getAttribute("href").substring(1);
    const section = document.getElementById(sectionId);
    const rect = section.getBoundingClientRect();

    if (rect.top <= 0 && rect.bottom >= 0) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);
