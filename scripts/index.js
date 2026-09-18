const apiBaseMeta = document.querySelector('meta[name="api-base"]');
const API_BASE = (apiBaseMeta && apiBaseMeta.content.trim())
  || (location.hostname.endsWith("github.io") ? "https://henrytran07-github-io.vercel.app" : "");

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

let experienceHTML = document.getElementById('experience-container'); 

async function loadExperienceInfo() {
  let response = await fetch("/data/experience.json"); 
  let jsonFile = await response.json(); 
  
  jsonFile.forEach((experience) => {
    experienceHTML.innerHTML += `
      <a href="${experience.link_page}" target="_blank" class="experience-link">
        <div class="experience">
          <div class="date">${experience.timeline}</div>

          <div class="experience-info">
            <div class="experience-info-header">
              <h3>
                ${experience.company}
              </h3>

              <span class="arrow-right">
                →
              </span>
            </div>

            <h4>${experience.title}</h4>

            <p>
              ${experience.description}
            </p>
          </div>
        </div>
      </a>
    `; 
  });
}

loadExperienceInfo(); 

const projectHTML = document.getElementById("project-container");
const projectDialog = document.getElementById("project-dialog");
const projectDialogInner = projectDialog.querySelector(".project-dialog-inner");
const projectDialogImage = document.getElementById("project-dialog-image");
const projectDialogTitle = document.getElementById("project-dialog-title");
const projectDialogDescription = document.getElementById("project-dialog-description");
const projectDialogSkills = document.getElementById("project-dialog-skills");
const projectDialogLink = document.getElementById("project-dialog-link");

let projectData = [];

const escapeHTML = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);

async function loadProjectInfo() {
  const response = await fetch("/data/projects.json");

  if (!response.ok) {
    throw new Error(`Could not load projects: ${response.status}`);
  }

  projectData = await response.json();

  projectHTML.innerHTML = projectData
    .map(
      (project, index) => `
        <div class="project js-project" role="button" tabindex="0" aria-haspopup="dialog" data-index="${index}">
          <img src="${escapeHTML(project.image.image_link)}" alt="${escapeHTML(project.image.alt ?? project.name)}" width="${escapeHTML(project.image.width)}" height="${escapeHTML(project.image.height)}" loading="lazy" decoding="async">
          <div class="project-info">
            <div class="project-info-header">
              <h3>${escapeHTML(project.name)}</h3>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

function openProject(index) {
  const project = projectData[index];
  if (!project) return;

  projectDialogImage.src = project.image.image_link;
  projectDialogImage.alt = project.image.alt ?? project.name;
  projectDialogTitle.textContent = project.name;
  projectDialogDescription.textContent = project.description;

  projectDialogSkills.replaceChildren();
  (project.skills ?? []).forEach((skill) => {
    const item = document.createElement("li");
    item.textContent = skill;
    projectDialogSkills.appendChild(item);
  });

  if (project.link) {
    projectDialogLink.href = project.link;
    projectDialogLink.hidden = false;
  } else {
    projectDialogLink.hidden = true;
  }

  document.documentElement.style.overflow = "hidden";
  projectDialog.showModal();
}

projectHTML.addEventListener("click", (event) => {
  const card = event.target.closest(".js-project");
  if (!card) return;
  openProject(Number(card.dataset.index));
});

projectHTML.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest(".js-project");
  if (!card) return;
  event.preventDefault();
  openProject(Number(card.dataset.index));
});

projectDialog.addEventListener("click", (event) => {
  if (!event.target.closest(".project-dialog-inner") || event.target.closest("[data-close]")) {
    projectDialog.close();
  }
});

projectDialog.addEventListener("close", () => {
  document.documentElement.style.overflow = "";
});

loadProjectInfo().catch((error) => {
  console.error(error);
  projectHTML.innerHTML = "<p>Projects could not be loaded right now.</p>";
});

const input = document.getElementById('chat-id'); 
const sendbtn = document.getElementById('send-id'); 
const inputChat = document.getElementById('input-chat'); 
const chatlogHTML = document.getElementById('chat-log'); 
function displaySendButton() {
  if (input.value != "") {
    inputChat.classList.add("send"); 
  } else {
    inputChat.classList.remove("send"); 
  }
}

input.addEventListener("input", displaySendButton);

sendbtn.addEventListener("click", async function () {
  const message = input.value.trim();
  if (message === "") {
    return;
  }

  input.value = "";
  inputChat.classList.remove("send");

  const userBubble = document.createElement("p");
  userBubble.classList.add("message", "user");
  userBubble.textContent = message;
  chatlogHTML.appendChild(userBubble);

  const botBubble = document.createElement("p");
  botBubble.classList.add("message", "bot");
  botBubble.textContent = "thinking...";
  chatlogHTML.appendChild(botBubble);
  chatlogHTML.scrollTop = chatlogHTML.scrollHeight;

  try {
    const response = await fetch(`${API_BASE}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: message })
    });
    if (!response.ok) {
      botBubble.textContent = "Something went wrong on the server.";
      console.error("Server error", response.status, await response.text());
      return;
    }
    const data = await response.json();
    botBubble.textContent = data.reply;
  } catch (err) {
    botBubble.textContent = "loc ai is offline right now — email me @ henrytran07@ucla.edu";
    console.error("Request failed:", err);
  } finally {
    chatlogHTML.scrollTop = chatlogHTML.scrollHeight;
  }
});