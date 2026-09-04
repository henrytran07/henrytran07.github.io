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
  let response = await fetch("../data/experience.json"); 
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

let projectHTML = document.getElementById('project-container'); 

async function loadProjectInfo() {
  let response = await fetch("../data/projects.json"); 
  let jsonFile = await response.json(); 

  jsonFile.forEach((project) => {
    projectHTML.innerHTML += `
      <a href= ${project.link} rel="noopener" class="project-link">
        <div class="project">
          <img src="${project.image.image_link}"alt="Terminal rendering of the chess board" width="${project.image.width}" height="${project.image.height}" loading="lazy" decoding="async">
          <div class="project-info">
            <div class="project-info-header">
              <h3>
                ${project.name}
              </h3>
              <span class="arrow-right">
                →
              </span>
            </div>
            <p>  
              ${project.description}      
            </p>
            <div class="skill-pills">
              <ul>
                ${project.skills.map(skill => {
                  return `<li>${skill}</li>`;
                }).join("")}
              </ul>
            </div>
          </div>
        </div>
      </a>
    `; 
  }); 
}

loadProjectInfo(); 

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
    const response = await fetch("https://henrytran07-github-io.vercel.app/api/chat", {
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
    botBubble.textContent = "loc ai is offline right now — email me instead.";
    console.error("Request failed:", err);
  } finally {
    chatlogHTML.scrollTop = chatlogHTML.scrollHeight;
  }
});