const links = document.querySelectorAll(".js-nav-link");

const navbar = document.querySelector(".js-nav-bar");

const aboutSection = document.getElementById("about");
const experienceSection = document.getElementById("experience");
const projectSection = document.getElementById("projects");
const contactSection = document.getElementById("contacts");

const chatbot = document.querySelector('.js-chatbot');
const closingWindow = document.querySelector('.js-closing-window');
function clearSelected() {
  links.forEach((link) => {
    link.classList.remove("selected");
  });
}
function selectLink(link) {
  clearSelected();
  if (link) {
    link.classList.add("selected");
  }
}

let isClicked = false;
// click
links.forEach((link) => {
  link.addEventListener("click", () => {
    isClicked = true;
    selectLink(link);
    setTimeout(() => {
      isClicked = false;
    }, 800);
  });
});
// scroll
window.addEventListener("scroll", () => {

  navbar.classList.toggle("scrolled", window.scrollY > 50);
  if (isClicked) {
    return;
  }
  const y = window.scrollY + 200;
  if (contactSection && y >= contactSection.offsetTop) {
    selectLink(links[3]);
  } else if (projectSection && y >= projectSection.offsetTop) {
    selectLink(links[2]);
  } else if (experienceSection && y >= experienceSection.offsetTop) {
    selectLink(links[1]);
  } else if (aboutSection && y >= aboutSection.offsetTop) {
    selectLink(links[0]);
  } else {
    clearSelected();
  }
}, { passive: true });

let isCBOpen = false;

chatbot.addEventListener("click", () => {
  if (isCBOpen === false) {
    chatbot.classList.add('open');
    isCBOpen = true;
  }
});

closingWindow.addEventListener("click", (event) => {
  event.stopPropagation();

  if (isCBOpen === true) {
    chatbot.classList.remove('open');
    isCBOpen = false;
  }
});



