const links = document.querySelectorAll('.js-nav-link');
const navbar = document.querySelector('.js-nav-bar');

const aboutSection = document.getElementById("about");
const experienceSection = document.getElementById("experience");
const projectSection = document.getElementById("projects");

function clearSelected() {
  links.forEach((l) => l.classList.remove('selected'));
}

function selectLink(link) {
  clearSelected();
  if (link) link.classList.add('selected');
}

window.addEventListener("scroll", () => {
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 50);

  const y = window.scrollY + 200;

  if (projectSection && y >= projectSection.offsetTop) {
    selectLink(links[2]);
  } else if (experienceSection && y >= experienceSection.offsetTop) {
    selectLink(links[1]);
  } else if (aboutSection && y >= aboutSection.offsetTop) {
    selectLink(links[0]);
  } else {
    clearSelected();
  }
}, { passive: true });